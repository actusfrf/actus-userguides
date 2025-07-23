---
id: cyclePointOfInterestPayment
title: Cycle Point Of Interest Payment
sidebar_label: Cycle Point Of Interest Payment
---

## Cycle Point Of Interest Payment

**Acronym**: `IPPNT`  
**Identifier**: `cyclePointOfInterestPayment`  
**Group**: `Interest`  
**Type**: `Enum`  
**Default**: `E`  

### Description
Usually, interest is paid at the end of each IPCL which corresponds to a IPPNT value of E which is also the default. If interest payment occurs at the beginning of the cycle, the value is B.

### Allowed Values
- **Beginning** (`B`) (`beginning` / `0`): Interest is paid upfront of the interest period.
- **End** (`E`) (`end` / `1`): Interest is paid at the end of the interest period.
