---
id: Analysis
title: AnalysisLayer
sidebar_label: Analysis
---

# AnalysisLayer

The Analysis Layer provides a modular system for interpreting ACTUS contract simulation results.  
It builds on a shared base class `Analysis` and offers specialized subclasses for common use cases:

- `IncomeAnalysis`: tracks earnings from interest and fees
- `LiquidityAnalysis`: tracks total net cash movement
- `ValueAnalysis`: computes nominal and discounted value (NPV)

Each analysis operates on a `CashFlowStream` and can be customized by time range or aggregation frequency.

---

## 🧱 Base Class: `Analysis`

All analysis classes inherit from `Analysis`, which provides access to:

- The original portfolio (`.portfolio`)
- The cash flow events (`.events_df`)
- Risk factor data (`.risk_factors`)

```python
class Analysis(ABC):
    def __init__(self, cf_stream):
        self.cf_stream = cf_stream
        self.portfolio = cf_stream.portfolio
        self.risk_factors = cf_stream.riskFactors
        self.events_df = cf_stream.events_df.copy()
```

---

## ⏱ Frequency Options & Time Filtering

Most analyses support aggregation and filtering:

| Code | Description     |
|------|-----------------|
| M    | Monthly         |
| Q    | Quarterly       |
| 2Q   | Semi-Annually   |
| Y    | Yearly          |

Optional parameters `start` and `end` define the analysis window.

```python
IncomeAnalysis(cf_stream, freq="Q", start="2025-01-01", end="2027-12-31")
```

---

## 📈 IncomeAnalysis

Captures interest (`IP`) and fee payments (`FP`) over time.

```python
ia = IncomeAnalysis(cf_stream, freq="M")
print(ia.results)
ia.plot()
```

- Output: net income per time bucket
- Supports `.plot()` and `return_fig=True`

---

## 💧 LiquidityAnalysis

Summarizes **total net cash** (incoming and outgoing) across all events:

```python
liq = LiquidityAnalysis(cf_stream, freq="Y")
print(liq.results)
liq.plot()
```

---

## 💰 ValueAnalysis

Computes:

- Undiscounted **nominal value** of all future payoffs
- **Net Present Value (NPV)** using a discount curve or flat rate

```python
val = ValueAnalysis(cf_stream, as_of_date="2025-01-01", discount_curve_code="USD_DISCOUNT")
print(val.summarize())
```

If multiple curves are provided, the user must specify one using `discount_curve_code`.

If none are available, a `flat_rate=0.03` can be passed.

---

## 🔧 Custom Analysis

To implement your own logic:

```python
class MyAnalysis(Analysis):
    def __init__(self, cf_stream):
        super().__init__(cf_stream)
        self.results = self.analyze()

    def analyze(self):
        df = self.events_df
        # your custom logic
        return ...

    def plot(self):
        ...
```

You can then use `.results`, `.plot()` or `.to_dataframe()`.

---

## 🧠 Design Philosophy

Each analysis is:

- **Independent**: uses only what's in `CashFlowStream`
- **Extensible**: override `.analyze()` and `.plot()` as needed
- **Composable**: results can be combined, exported, visualized

---

## 📚 See Also

- [`CashFlowStream`](./CashFlowStream.md)
