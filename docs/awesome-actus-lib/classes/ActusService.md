---
id: ActusService
title: ActusService
sidebar_label: ActusService
---

# ActusService

The `ActusService` class is the core controller interface for generating ACTUS-compliant event schedules.

It connects your Python-based contracts to the ACTUS simulation backend via HTTP.

---

## ✅ Usage Example

```python
from awesome_actus_lib import PAM, ActusService

contract = PAM(...)

service = ActusService(serverURL="http://localhost:8083")
eventStream = service.generateEvents(portfolio=contract)
```

---

## 🚀 Features

- Sends contracts to `/eventsBatch` endpoint of the ACTUS engine
- Converts contract terms and optional risk factors into a backend-compatible format
- Returns a `CashFlowStream` for downstream analysis

---

## 🔁 Methods

| Method                        | Description |
|------------------------------|-------------|
| `generateEvents()`           | Simulates contracts using inline risk factors (or none) |
| `generateEventsWithExternalRisk()` | Simulates contracts using pre-uploaded risk scenarios |
| `extract_required_risk_factors()` | Finds all referenced risk factors in a portfolio |
| `_validate_rate_reset_risk_factor_coverage()` | Ensures risk coverage dates are valid |

---

## 🔐 Configuration

| Parameter             | Description |
|------------------------|-------------|
| `serverURL`            | Base URL of the ACTUS backend |
| `externalRiskService` | Toggle for using external RiskService |

---

## 🧪 Validation

When `generateEvents()` is called, the controller:
- Checks contract formatting
- Validates risk factor compatibility
- Raises detailed exceptions for missing or malformed inputs

---

## 🔗 See Also

- [`Portfolio`](./Portfolio)
- [`CashFlowStream`](./cashflowstream)
- [`RiskService`](./RiskService)
