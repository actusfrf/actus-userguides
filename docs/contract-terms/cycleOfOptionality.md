---
id: cycleOfOptionality
title: Cycle Of Optionality
sidebar_label: Cycle Of Optionality
---

## Cycle Of Optionality

**Acronym**: `OPCL`  
**Identifier**: `cycleOfOptionality`  
**Group**: `Optionality`  
**Type**: `Cycle`  
**Default**: ``  

### Description
Cycle according to which the option exercise date schedule will be calculated.
OPCL can be NULL for American Options or Prepayment Optionality in which case the optionality period starts at OPANX and ends at OPXED (for american options) or MD (in case of prepayment optionality).
The interval will be adjusted yet by EOMC and BDC.

### Allowed Values
- `[ISO8601 Duration]L[s={0,1}]`
