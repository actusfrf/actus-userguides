---
id: nextResetRate
title: Next Reset Rate
sidebar_label: Next Reset Rate
---

## Next Reset Rate

**Acronym**: `RRNXT`  
**Identifier**: `nextResetRate`  
**Group**: `Rate Reset`  
**Type**: `Real`  
**Default**: ``  

### Description
Holds the new rate that has been fixed already (cf. attribute FixingDays) but not applied. This new rate will be applied at the next rate reset event (after SD and according to the rate reset schedule). Attention, RRNXT must be set to NULL after it is applied!
