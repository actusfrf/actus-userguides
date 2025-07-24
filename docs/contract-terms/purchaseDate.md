---
id: purchaseDate
title: Purchase Date
sidebar_label: Purchase Date
---

## Purchase Date

**Acronym**: `PRD`  
**Identifier**: `purchaseDate`  
**Group**: `Notional Principal`  
**Type**: `Timestamp`  
**Default**: ``  

### Description
If a contract is bought after initiation (for example a bond on the secondary market) this date has to be set. It refers to the date at which the payment (of PPRD) and transfer of the security happens. In other words, PRD - if set - takes the role otherwise IED has from a cash flow perspective. 
Note, CPID of the CT is not the counterparty of the transaction!

### Allowed Values
- `ISO8601 Datetime`
