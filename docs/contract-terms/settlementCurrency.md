---
id: settlementCurrency
title: Settlement Currency
sidebar_label: Settlement Currency
---

## Settlement Currency

**Acronym**: `CURS`  
**Identifier**: `settlementCurrency`  
**Group**: `Settlement`  
**Type**: `Varchar`  
**Default**: ``  

### Description
The currency in which cash flows are settled. This currency can be different from the currency (CUR) in which cash flows or the contract, respectively, is denominated in which case the respective FX-rate applies at settlement time.
If no settlement currency is defined the cash flows are settled in the currency in which they are denominated.

### Allowed Values
- `ISO4217`
