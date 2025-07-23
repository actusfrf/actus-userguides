---
id: cycleOfPrincipalRedemption
title: Cycle Of Principal Redemption
sidebar_label: Cycle Of Principal Redemption
---

## Cycle Of Principal Redemption

**Acronym**: `PRCL`  
**Identifier**: `cycleOfPrincipalRedemption`  
**Group**: `Notional Principal`  
**Type**: `Cycle`  
**Default**: ``  

### Description
Cycle according to which the interest payment date schedule will be calculated.
In case PRCL is not set, then there will only be one principal payment event at MD (and possibly at PRANX if set).
The interval will be adjusted yet by EOMC and BDC.

### Allowed Values
- `[ISO8601 Duration]L[s={0,1}]`
