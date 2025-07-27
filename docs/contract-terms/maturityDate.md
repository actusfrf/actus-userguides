---
id: maturityDate
title: Maturity Date
sidebar_label: Maturity Date
---

## Maturity Date

**Acronym**: `MD`  
**Identifier**: `maturityDate`  
**Group**: `Notional Principal`  
**Type**: `Timestamp`  
**Default**: ``  

### Description
Marks the contractual end of the lifecycle of a CT. Generally, date of the last cash flows. 
This includes normally a principal and an interest payment. Some Maturity CTs as perpetuals (PBN) do not have such a date. For variable amortizing contracts of the ANN CT, this date might be less than the scheduled end of the contract (which is deduced from the periodic payment amount 
PRNXT). In this case it balloons.

### Allowed Values
- `ISO8601 Datetime`
