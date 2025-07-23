---
id: cycleOfInterestPayment
title: Cycle Of Interest Payment
sidebar_label: Cycle Of Interest Payment
---

## Cycle Of Interest Payment

**Acronym**: `IPCL`  
**Identifier**: `cycleOfInterestPayment`  
**Group**: `Interest`  
**Type**: `Cycle`  
**Default**: ``  

### Description
Cycle according to which the interest payment date schedule will be calculated.
In case IPCL is not set, then there will only be an interest payment event at MD (and possibly at IPANX if set).
The interval will be adjusted yet by EOMC and BDC.

### Allowed Values
- `[ISO8601 Duration]L[s={0,1}]`
