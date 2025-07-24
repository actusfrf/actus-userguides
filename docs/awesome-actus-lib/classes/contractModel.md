---
id: contractModel
title: ContractModel
sidebar_label: ContractModel
---

# ContractModel

The `ContractModel` class is the abstract base for all ACTUS contract types in the Awesome Actus Library. It defines the structure, validation, and lifecycle behavior of ACTUS-conformant financial contracts such as `PAM`, `ANN`, `LAM`, etc.

> All contract types like `PAM` inherit from `ContractModel`, which centralizes term management, validation, and internal representation.

---

## 🌍 Purpose

- Standardizes how contract terms are structured, stored, and validated  
- Handles the lifecycle of contract input validation  
- Enforces ACTUS time consistency rules  
- Enables extension with user-defined terms  

---

## ✏️ Structure

Each `ContractModel` holds contract terms in a dictionary:

```python
self.terms = {
  "contractID": ContractID("PAM-001"),
  "notionalPrincipal": NotionalPrincipal(10000.0),
  # ...
}
```

- Keys are the term identifiers (e.g. `contractID`, `notionalPrincipal`)  
- Values are instances of subclasses of `ContractTerm`

---

## 🛠️ TermBuilder Utility

Inside the model, a helper class `TermBuilder` is used to dynamically construct the correct term class based on the name:

```python
builder = self.TermBuilder(self.terms)
builder.add("notionalPrincipal", 10000.0)
```

This maps a field like `notionalPrincipal` to the correct term class (e.g., `NotionalPrincipal`).

---

## 🔢 Term Access

### Get a Term
```python
model.get_term("maturityDate")
```

### Serialize to Dictionary
```python
model.to_dict()
```
Useful for exporting to JSON or saving contract data.

---

## ⚠️ Time Consistency Rules

The `ContractModel` enforces ACTUS time ordering constraints via `check_time_consistency_rules()`. This includes checks like:

- `contractDealDate <= initialExchangeDate <= maturityDate`
- `cycleAnchorDateOfInterestPayment < maturityDate`
- `optionExerciseEndDate <= maturityDate`

Warnings are printed if rules are violated.

---

## 🌐 User-Defined Terms

If you add a custom term not in the ACTUS standard, the model can still accept it:

```python
pam = PAM(..., myCustomField="customValue")
```

These are wrapped using a fallback `UserDefinedTerm` and stored normally in `self.terms`.

---

## ✅ Required Method

### `validate_terms()` (abstract)  
Each subclass (e.g. `PAM`, `ANN`) must implement `validate_terms()` to:
- Check ACTUS group dependencies  
- Raise errors for missing fields

---

## 🔗 See Also

- [`PAM`](./PAM) for a concrete example  
- [Contract Terms](../../contract-terms/contract-terms-overview)  
- [ACTUS Standard Overview](../../standard/overview)  
