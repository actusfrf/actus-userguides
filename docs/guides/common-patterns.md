---
id: common-patterns
title: Common Patterns
sidebar_label: Common Patterns
---

# Common Patterns

> Best practices and idiomatic usage in Awesome ACTUS Library.

This guide outlines the most common workflows, design patterns, and best practices for using the Awesome ACTUS Library effectively.

---

## 🧭 General Workflow Pattern

The most typical pattern in this library follows a three-step flow:

**Define → Simulate → Analyze**

```python
# 1. Define contract(s)
contract = PAM(...)  # or a full portfolio

# 2. Simulate cash flows
cf_stream = actus_service.generateEvents(portfolio=[contract], riskFactors=[my_curve])

# 3. Analyze results
income = IncomeAnalysis(cf_stream)
value = ValueAnalysis(cf_stream, flat_rate=0.03)

# Optional: visualize
cf_stream.plot()
income.plot()
```

This flow works consistently for both basic and advanced use cases.

---

## 🧱 Portfolio Modeling Pattern

You can simulate multiple contracts at once using the `Portfolio` class:

```python
portfolio = Portfolio(contracts=[
    PAM(contractID="pam01", ...),
    ANN(contractID="ann01", ...)
])

cf_stream = actus_service.generateEvents(portfolio=portfolio, riskFactors=[my_curve])
```

- Contracts can be mixed by type
- `contractID` is used to track outputs
- The resulting `CashFlowStream` keeps the full portfolio context

---

## 📊 Risk Factor Injection

Risk factors like `YieldCurve` or `ReferenceIndex` can be provided at simulation time and will be embedded in the output stream for downstream use:

```python
curve = YieldCurve(
    marketObjectCode="USD_DISCOUNT",
    referenceDate="2025-01-01",
    tenors=["1M", "3M", "1Y"],
    rates=[0.01, 0.015, 0.02]
)

cf_stream = actus_service.generateEvents(
    portfolio=[contract],
    riskFactors=[curve]
)
```

The cash flow stream now includes this curve for later analysis (e.g. NPV).

---

## 📈 Analysis and Plotting

Once you have a `CashFlowStream`, multiple built-in analyses are available:

```python
cf_stream.plot()  # Shows either contract or portfolio view

income = IncomeAnalysis(cf_stream, freq="Q")
income.plot()

va = ValueAnalysis(cf_stream, flat_rate=0.03)
print(va.summarize())
```

All analysis classes share a consistent structure and can be extended.

---

## 🧩 Implementing Custom Analysis

You can extend the analysis layer by implementing your own:

```python
class CustomAnalysis(Analysis):
    def __init__(self, cf_stream, threshold):
        super().__init__(cf_stream)
        self.threshold = threshold
        self.results = self.analyze()

    def analyze(self):
        df = self.events_df
        return df[df["payoff"] > self.threshold]

    def plot(self):
        self.results["payoff"].plot(kind="bar")
```

---

## ⚠️ Gotchas and Recommendations

- ✅ **No need to specify `contractType`** manually — the library sets it automatically per contract class.
- 🏷 **Always use named `marketObjectCode`s** like `"USD_DISCOUNT"` so that downstream analyses can find the correct curve.
- 🔍 Use `cf_stream.show()` before analysis to preview your data.
- 📉 `plot()` adapts automatically for single or multiple contracts.

---

## 🔗 Related Examples

- [Basic Examples](../examples/basic-contract-types/example_ANN.md)
- [Advanced Examples](../examples/advanced-examples/portfolioExample.md)

Each example includes full Python source and generated markdown for learning and reuse.

