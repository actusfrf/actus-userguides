---
id: arrayIncreaseDecrease
title: Array Increase Decrease
sidebar_label: Array Increase Decrease
---

## Array Increase Decrease

**Acronym**: `ARINCDEC`  
**Identifier**: `arrayIncreaseDecrease`  
**Group**: `Notional Principal`  
**Type**: `Enum[]`  
**Default**: ``  

### Description
Indicates whether a certain PRNXT element in ARPRNX increases the principal (NT) or decreases it.
Applies only for ANX, NAX, LAX Maturity CTs. For all other Maturity CTs the first principal payment is always in the opposite direction of all other (following) payments.

### Allowed Values
- **Increase** (`INC`) (`increase` / `0`): Notional is increased in this period.
- **Decrease** (`DEC`) (`decrease` / `1`): Notional is decreased in this period.
