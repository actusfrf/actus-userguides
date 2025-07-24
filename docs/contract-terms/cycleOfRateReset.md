---
id: cycleOfRateReset
title: Cycle Of Rate Reset
sidebar_label: Cycle Of Rate Reset
---

## Cycle Of Rate Reset

**Acronym**: `RRCL`  
**Identifier**: `cycleOfRateReset`  
**Group**: `Rate Reset`  
**Type**: `Cycle`  
**Default**: ``  

### Description
Cycle according to which the rate reset date schedule will be calculated.
In case RRCL is not set, then there will only be one rate reset event at RRANX given RRANX if set.
The interval will be adjusted yet by EOMC and BDC.

### Allowed Values
- `[ISO8601 Duration]L[s={0,1}]`
