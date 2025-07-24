---
id: capitalizationEndDate
title: Capitalization End Date
sidebar_label: Capitalization End Date
---

## Capitalization End Date

**Acronym**: `IPCED`  
**Identifier**: `capitalizationEndDate`  
**Group**: `Interest`  
**Type**: `Timestamp`  
**Default**: ``  

### Description
If IPCED is set, then interest is not paid or received but added to the balance (NT) until IPCED. If IPCED does not coincide with an IP cycle, one additional interest payment gets calculated at IPCED and capitalized. Thereafter normal interest payments occur.

### Allowed Values
- `ISO8601 Datetime`
