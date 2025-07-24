---
id: PAM
title: PAM
sidebar_label: PAM
---

# PAM

**Principal At Maturity (PAM)** is a standard ACTUS contract type implemented in the Awesome Actus Library.

This class represents fixed-rate or variable-rate instruments such as:
- Bullet loans
- Term deposits
- Zero-coupon or interest-bearing bonds

> 📚 For full term semantics and rule logic, refer to the [ACTUS Standard - PAM](../../contract-types/PAM.md).

---

## ✅ Usage Examples

```python
from awesome_actus_lib import PAM

contract = PAM(
    contractID="PAM-001",
    contractRole="RPA",
    contractDealDate="2025-01-01",
    initialExchangeDate="2025-01-02",
    maturityDate="2030-01-01",
    nominalInterestRate=0.03,
    notionalPrincipal=10000.0,
    dayCountConvention="30E360",
    statusDate="2025-01-01",
    currency="USD",
    counterpartyID="CP01",
    creatorID="user01"
)
```

---

## 🧠 Behavior

The `PAM` class:

- Inherits from [`ContractModel`](./contractModel)
- Automatically sets `contractType` to `"PAM"`
- Enforces all ACTUS-specific business rules using conditional groups
- Supports optional extension via keyword arguments (`**other_terms`)

---

## 🛠️ Conditional Group Handling

Certain fields become required when a "driver" term is provided. For example:

- `feeRate` → requires `feeBasis`
- `purchaseDate` → requires `priceAtPurchaseDate`
- `cycleAnchorDateOfRateReset` → requires `rateSpread` and `marketObjectCodeOfRateReset`

These are enforced automatically at instantiation via `validate_terms()`.
If a rule is violated, a useful message is printed out.

---

## 🔍 Notes

- Accepts both `datetime` and ISO 8601 `str` inputs for all ACTUS Terms that refer to dates
- Supports both ACTUS-defined and user-defined terms
- Implements ACTUS time consistency checks

---

## 🔗 See Also

- [ContractModel](./contractModel.md)
- [Contract Terms](../../contract-terms/contract-terms-overview)
- [PAM in ACTUS Standard](../../contract-types/PAM.md)
