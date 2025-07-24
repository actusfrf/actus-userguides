---
id: rateMultiplier
title: Rate Multiplier
sidebar_label: Rate Multiplier
---

## Rate Multiplier

**Acronym**: `RRMLT`  
**Identifier**: `rateMultiplier`  
**Group**: `Rate Reset`  
**Type**: `Real`  
**Default**: `1`  

### Description
Interest rate multiplier. A typical rate resetting rule is LIBOR plus x basis point where x represents the interest rate spread.
However, in some cases like reverse or super floater contracts an additional rate multiplier applies. In this case, the new rate is determined as: IPNR after rate reset = Rate selected from the market object * RRMLT + RRSP.
