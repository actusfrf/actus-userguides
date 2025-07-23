---
id: terminationDate
title: Termination Date
sidebar_label: Termination Date
---

## Termination Date

**Acronym**: `TD`  
**Identifier**: `terminationDate`  
**Group**: `Notional Principal`  
**Type**: `Timestamp`  
**Default**: ``  

### Description
If a contract is sold before MD (for example a bond on the secondary market) this date has to be set. It refers to the date at which the payment (of PTD) and transfer of the security happens. In other words, TD - if set - takes the role otherwise MD has from a cash flow perspective. 
Note, CPID of the CT is not the counterparty of the transaction!

### Allowed Values
- `ISO8601 Datetime`
