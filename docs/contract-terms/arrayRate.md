---
id: arrayRate
title: Array Rate
sidebar_label: Array Rate
---

## Array Rate

**Acronym**: `ARRATE`  
**Identifier**: `arrayRate`  
**Group**: `Rate Reset`  
**Type**: `Real[]`  
**Default**: ``  

### Description
For array-type rate reset schedules, this attribute represents either an interest rate (corresponding to IPNR) or a spread (corresponding to RRSP). Which case applies depends on the attribute ARFIXVAR: if ARFIXVAR=FIX then it represents the new IPNR and if ARFIXVAR=VAR then the applicable RRSP.
