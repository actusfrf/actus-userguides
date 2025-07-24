---
id: RiskService
title: RiskService
sidebar_label: RiskService
---

# RiskService

The `RiskService` class enables management of external market data scenarios and reference indexes. It is used when contracts rely on externalized risk factors instead of inline parameters.

---

## ✅ Usage Example

```python
from awesome_actus_lib import RiskService, ReferenceIndex

risk_service = RiskService(serverURL="http://localhost:8084")
risk_service.upload_reference_index(reference_index, riskFactorID="ust5Y")
```

---

## 🔁 Functionality

| Category           | Methods |
|--------------------|---------|
| 📈 Reference Index | `upload_reference_index()`, `delete_reference_index()`, `find_reference_index()` |
| 🎯 Scenarios       | `create_scenario()`, `find_all_scenarios()` |

---

## 🧠 Concepts

- Risk factors are uploaded using `to_json()` representations
- Scenarios are logical groupings of one or more risk factor IDs
- Required when calling `generateEventsWithExternalRisk()` on `ActusService`

---

## 🔗 See Also

- [`ActusService`](./ActusService)

