---
id: xDayNotice
title: X Day Notice
sidebar_label: X Day Notice
---

## X Day Notice

**Acronym**: `XDN`  
**Identifier**: `xDayNotice`  
**Group**: `Notional Principal`  
**Type**: `Period`  
**Default**: ``  

### Description
Used as rolling attribute with the callable CT's UMP and CLM uniquely. CLM's and UMP's will not be settled (MD not set) until the client uses his option to call the contract X_Day_Notice after Current Date. As long as MD or TD is not set, the client postpones his right to call to the future. The cycle is normally defined in number of business days.

### Allowed Values
- `ISO8601 Duration`
