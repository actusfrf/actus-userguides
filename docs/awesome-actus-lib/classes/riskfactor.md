---
id: riskfactor
title: RiskFactor
sidebar_label: Risk Factor
---

# 📉 RiskFactor Classes

The **`RiskFactor`** module in the Awesome ACTUS Library provides a structured and extensible interface for representing time-dependent market data used in ACTUS contract simulation and valuation.

It defines:

- An abstract base class `RiskFactor`
- Two concrete subclasses:
  - `ReferenceIndex`: for simple time series (e.g., LIBOR)
  - `YieldCurve`: for term structure of rates based on tenors

---

## 🔧 Design Philosophy

The goal is to allow **pluggable and reusable** market objects (e.g., curves and indices) that can be referenced by one or many contracts and reused across different analysis steps.

Each subclass implements `.to_json()` to provide a canonical form used by the ACTUS simulation engine.

---

## ✅ `RiskFactor` Base Class

```python
class RiskFactor(ABC):
    def __init__(self, marketObjectCode: str, source):
        ...

    def loadData(self, source):
        ...

    def plot(self, title=None, figsize=(10, 5), return_fig=False):
        ...

    @abstractmethod
    def to_json(self):
        ...
```

### 🔍 Attributes

| Name              | Type                | Description                            |
|-------------------|---------------------|----------------------------------------|
| `marketObjectCode`| `str`               | Identifier for use in contract terms   |
| `_data`           | `pd.DataFrame`      | Internal time series or curve data     |

### 🔍 Methods

- `loadData(source)`: Load from CSV or `DataFrame`
- `plot(...)`: Plot the data
- `to_json()`: Must be implemented by subclasses
- `_validate_and_format_dates(...)`: Normalize and validate date column

---

## 📊 `ReferenceIndex`

Represents a simple time series of market values (e.g., interest rates, FX rates).

```python
ReferenceIndex(marketObjectCode="USD_LIBOR", source="libor.csv", base=1)
```

**Expected Columns**: `["date", "value"]`

**Output Example**:
```json
{
  "marketObjectCode": "USD_LIBOR",
  "base": 1,
  "data": [
    {"time": "2025-01-01T00:00:00", "value": 0.035},
    ...
  ]
}
```

---

## 📈 `YieldCurve`

Represents a term structure defined by **tenors** and **rates**, anchored at a reference date.

```python
YieldCurve(
    marketObjectCode="USD_YC",
    referenceDate="2025-01-01",
    tenors=["1M", "3M", "6M", "1Y"],
    rates=[0.01, 0.015, 0.0175, 0.02]
)
```

**Tenors** support:
- Days (`D`)
- Weeks (`W`)
- Months (`M`)
- Years (`Y`)

> `"3M"` means 3 months from the reference date.

---

## 🎨 Visualization

You can quickly inspect any risk factor using:

```python
my_curve.plot()
```

This will show a timeline plot of the rate or value over time.

Use `return_fig=True` to return a `matplotlib` figure object.

---

## 🧩 Adding Your Own Risk Factor

To implement a custom risk factor, extend the base class and implement `to_json()`:

```python
class MyCustomFactor(RiskFactor):
    def to_json(self):
        df = self._data.copy()
        df["date"] = self._validate_and_format_dates("date")
        return {
            "marketObjectCode": self.marketObjectCode,
            "data": [
                {"time": f"{d}T00:00:00", "value": float(v)}
                for d, v in zip(df["date"], df["value"])
            ]
        }
```

This allows full control over the data source, transformation, and output format.

---

## 📁 Related

- [`contract_terms`](../../contract-terms/contract-terms-overview.md)
- [`CashFlowStream`](./CashFlowStream.md)
- [`ValueAnalysis`](./analysis.md)

