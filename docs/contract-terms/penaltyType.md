---
id: penaltyType
title: Penalty Type
sidebar_label: Penalty Type
---

## Penalty Type

**Acronym**: `PYTP`  
**Identifier**: `penaltyType`  
**Group**: `Optionality`  
**Type**: `Enum`  
**Default**: `O`  

### Description
Defines whether prepayment is linked to a penalty and of which kind.

### Allowed Values
- **No Penalty** (`N`) (`noPenalty` / `0`): No penalty applies.
- **Fixed Penalty** (`A`) (`fixedPenalty` / `1`): A fixed amount applies as penalty.
- **Relative Penalty** (`R`) (`relativePenalty` / `2`): A penalty relative to the notional outstanding applies.
- **Interest Rate Differential** (`I`) (`interestRateDifferential` / `3`): A penalty based on the current interest rate differential relative to the notional outstanding applies.
