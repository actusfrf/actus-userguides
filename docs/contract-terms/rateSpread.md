---
id: rateSpread
title: Rate Spread
sidebar_label: Rate Spread
---

## Rate Spread

**Acronym**: `RRSP`  
**Identifier**: `rateSpread`  
**Group**: `Rate Reset`  
**Type**: `Real`  
**Default**: `0`  

### Description
Interest rate spread. A typical rate resetting rule is LIBOR plus x basis point where x represents the interest rate spread.  
The following equation can be taken if RRMLT is not set: IPNR after rate reset = Rate selected from the market object  + RRSP.
