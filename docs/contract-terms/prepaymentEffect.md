---
id: prepaymentEffect
title: Prepayment Effect
sidebar_label: Prepayment Effect
---

## Prepayment Effect

**Acronym**: `PPEF`  
**Identifier**: `prepaymentEffect`  
**Group**: `Optionality`  
**Type**: `Enum`  
**Default**: `N`  

### Description
This attribute defines whether or not the right of prepayment exists and if yes, how prepayment affects the remaining principal redemption schedule of the contract

### Allowed Values
- **No Prepayment** (`N`) (`noPrepayment` / `0`): Prepayment is not allowed under the agreement.
- **Prepayment Reduces Redemption Amount** (`A`) (`prepaymentReducesRedemptionAmount` / `1`): Prepayment is allowed and reduces the redemption amount for the remaining period up to maturity.
- **Prepayment Reduces Maturity** (`M`) (`prepaymentReducesMaturity` / `2`): Prepayment is allowed and reduces the maturity.
