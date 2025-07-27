---
id: cyclePointOfRateReset
title: Cycle Point Of Rate Reset
sidebar_label: Cycle Point Of Rate Reset
---

## Cycle Point Of Rate Reset

**Acronym**: `RRPNT`  
**Identifier**: `cyclePointOfRateReset`  
**Group**: `Rate Reset`  
**Type**: `Enum`  
**Default**: `B`  

### Description
Normally rates get reset at the beginning of any resetting cycles. There are contracts where the rate is not set at the beginning but at the end of the cycle and then applied to the previous cycle (post-fixing); in other words the rate applies before it is fixed. Hence, the new rate is not known during the entire cycle where it applies. Therefore, the rate will be applied backwards at the end of the cycle. This happens through a correction of interest accrued.

### Allowed Values
- **Beginning** (`B`) (`beginning` / `0`): The new rate is applied at the beginning of the reset period.
- **End** (`E`) (`end` / `1`): The new rate is applied at the end of the reset period.
