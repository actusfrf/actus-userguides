---
id: Portfolio
title: Portfolio
sidebar_label: Portfolio
---

# Portfolio

The `Portfolio` class represents a collection of ACTUS contracts, such as `PAM`, `ANN`, or other contract types. It allows you to batch contracts into a group for simulation or analysis.

> 📦 This is often the next step after creating individual `ContractModel` instances.

---

## ✅ Usage Example

### From Python Objects

```python
from awesome_actus_lib import PAM, Portfolio

pam1 = PAM(...parameters...)
pam2 = PAM(...parameters...)

portfolio = Portfolio([pam1, pam2])
```

### From CSV File

```python
portfolio = Portfolio("path/to/your/portfolio/of/actus/contracts.csv")
```

The CSV file must contain one row per contract and include a `contractType` column (e.g., "PAM", "ANN", etc.).
TBD: Add sample Files


## 🧠 Features

- Accepts input as either:
  - A list of `ContractModel` instances
  - A path to a `.csv` file with flat contract term definitions
- Converts each contract into a dictionary and aggregates them in a DataFrame (`contract_df`)
- Automatically instantiates contracts based on the `contractType` column in CSVs

---

## 📄 Attributes

| Attribute      | Type            | Description                                 |
|----------------|------------------|---------------------------------------------|
| `contracts`    | `List[ContractModel]` | List of contract instances |
| `contract_df`  | `pandas.DataFrame`    | Tabular view of all contract terms         |

---

## 🔄 Methods

| Method            | Description                                         |
|-------------------|-----------------------------------------------------|
| `to_dict()`       | Returns a list of dictionaries for all contracts    |
| `write_to_file()` | Saves the current portfolio to a CSV file           |
| `__len__()`       | Returns the number of contracts                     |
| `__str__()`       | Human-readable summary string                       |

---

## ⚠️ Error Handling

- Will raise `FileNotFoundError` if CSV path is invalid
- Raises `TypeError` if input is not a valid list or string
- Handles instantiation errors per contract row in the CSV

---

## 🔗 See Also

- [`ContractModel`](./contractModel)
- [`PAM`](./PAM)
