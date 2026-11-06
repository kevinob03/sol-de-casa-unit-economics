"""Reproduce controles numéricos de Sol de Casa; usa solo la biblioteca estándar."""

from dataclasses import dataclass

META_HISTORY = ((0, 0), (2000, 280), (4000, 500), (6000, 680), (8000, 840), (10000, 960))
GOOGLE_HISTORY = ((0, 0), (2000, 55), (4000, 100), (6000, 135), (8000, 160))


def interpolate_leads(spend: float, points: tuple[tuple[float, float], ...]) -> float:
    if spend < points[0][0] or spend > points[-1][0]:
        raise ValueError("La inversión queda fuera del rango documentado.")
    for (x0, y0), (x1, y1) in zip(points, points[1:]):
        if x0 <= spend <= x1:
            if x1 == x0:
                return y0
            return y0 + (spend - x0) * (y1 - y0) / (x1 - x0)
    raise AssertionError("No se encontró un tramo para la inversión.")


@dataclass(frozen=True)
class Channel:
    leads: float
    contact: float
    schedule: float
    attended: float
    close: float
    spend: float


def funnel(channel: Channel, capacity: float) -> dict[str, float]:
    requested = channel.leads * channel.contact * channel.schedule * channel.attended
    visits = min(requested, max(0.0, capacity))
    sales = visits * channel.close
    return {"requested": requested, "visits": visits, "sales": sales}


def allocate_capacity(google_requested: float, meta_requested: float, capacity: float) -> tuple[float, float]:
    google_visits = min(google_requested, max(0.0, capacity))
    meta_visits = min(meta_requested, max(0.0, capacity - google_visits))
    return google_visits, meta_visits


def cac_real(spend: float, visit_cost: float, visits: float, sales: float) -> float | None:
    return None if sales == 0 else (spend + visit_cost * visits) / sales


def main() -> None:
    contribution = 6500 * (1 - 0.55 - 0.17 - 0.03)
    meta_leads = interpolate_leads(4000, META_HISTORY)
    google_leads = interpolate_leads(4000, GOOGLE_HISTORY)
    meta = funnel(Channel(meta_leads, 0.55, 0.30, 0.70, 0.18, 4000), 100)
    google = funnel(Channel(google_leads, 0.85, 0.55, 0.85, 0.30, 4000), 100)
    total_visits = meta["visits"] + google["visits"]
    total_sales = meta["sales"] + google["sales"]
    meta_cac = cac_real(4000, 60, meta["visits"], meta["sales"])
    google_cac = cac_real(4000, 60, google["visits"], google["sales"])
    total_cac = cac_real(8000, 60, total_visits, total_sales)

    agency_historical = funnel(Channel(840, 0.55, 0.30, 0.70, 0.18, 8000), 100)
    agency_claim = funnel(Channel(1000, 0.55, 0.30, 0.70, 0.18, 8000), 100)
    agency_historical_cac = cac_real(8000, 60, agency_historical["visits"], agency_historical["sales"])
    priority = allocate_capacity(39.7375, 115.5, 100)

    checks = {
        "contribution": (contribution, 1625.0),
        "base_visits": (total_visits, 97.4875),
        "base_sales": (total_sales, 22.31625),
        "meta_cac_real": (meta_cac, 718.1337181337183),
        "google_cac_real": (google_cac, 535.5352836321695),
        "total_cac_real": (total_cac, 620.5903769674566),
        "agency_historical_leads_sales": (agency_historical["sales"], 17.4636),
        "agency_historical_cac": (agency_historical_cac, 791.4290295242677),
        "base_vs_agency_sales_difference": (total_sales - agency_historical["sales"], 4.85265),
        "agency_claim_visits_sales": (agency_claim["visits"], 100.0),
        "google_priority": (priority[0], 39.7375),
        "meta_gets_remainder": (priority[1], 60.2625),
        "meta_history_8k": (interpolate_leads(8000, META_HISTORY), 840.0),
        "google_history_8k": (interpolate_leads(8000, GOOGLE_HISTORY), 160.0),
        "meta_history_2k": (interpolate_leads(2000, META_HISTORY), 280.0),
        "meta_history_6k": (interpolate_leads(6000, META_HISTORY), 680.0),
    }
    for name, (actual, expected) in checks.items():
        assert actual is not None and abs(actual - expected) < 1e-8, (name, actual, expected)

    assert cac_real(0, 60, 0, 0) is None  # gasto cero: CAC N/D, no infinito
    assert 0.0 == funnel(Channel(0, 0.55, 0.30, 0.70, 0.18, 0), 100)["visits"]
    assert abs(agency_claim["requested"] - 115.5) < 1e-8  # solicitado ≠ realizado
    assert agency_claim["visits"] <= 100
    try:
        interpolate_leads(10001, META_HISTORY)
    except ValueError:
        pass
    else:
        raise AssertionError("No se debe extrapolar por encima del rango autorizado.")

    print(f"Contribución: ${contribution:.2f}")
    print(f"Visitas/ventas actuales esperadas: {total_visits:.4f} / {total_sales:.5f}")
    print(f"CAC real Meta / Google / total: ${meta_cac:.4f} / ${google_cac:.4f} / ${total_cac:.4f}")
    print(f"Agencia con historial: {agency_historical['sales']:.4f} ventas esperadas, CAC real ${agency_historical_cac:.4f}; diferencia vs. base: {total_sales - agency_historical['sales']:.5f} ventas")
    print(f"Agencia con su supuesto: {agency_claim['requested']:.1f} visitas pedidas, {agency_claim['visits']:.1f} hechas")
    print(f"Capacidad con prioridad Google: {priority[0]:.4f} Google + {priority[1]:.4f} Meta = {sum(priority):.4f}")
    print(f"OK: {len(checks) + 5} controles pasaron.")


if __name__ == "__main__":
    main()
