---
id: optionStrike1
title: Option Strike 1
sidebar_label: Option Strike 1
---

## Option Strike 1

**Acronym**: `OPS1`  
**Identifier**: `optionStrike1`  
**Group**: `Optionality`  
**Type**: `Real`  
**Default**: ``  

### Description
Strike price of the option. Whether it is a call/put is determined by the attribute OPTP, i.e a call or a put (or a combination of call/put).
This attribute is used for price related options such as options on bonds, stocks or FX. Interest rate related options (caps/floos) are handled within th RatReset group.

### Allowed Values
- `Positive`
