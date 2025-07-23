---
id: optionType
title: Option Type
sidebar_label: Option Type
---

## Option Type

**Acronym**: `OPTP`  
**Identifier**: `optionType`  
**Group**: `Optionality`  
**Type**: `Enum`  
**Default**: ``  

### Description
Defines whether the option is a call or put or a combination of it. This field has to be seen in combination with CNTRL where it is defined whether CRID is the buyer or the seller.

### Allowed Values
- **Call** (`C`) (`call` / `0`): Call option.
- **Put** (`P`) (`put` / `1`): Put option.
- **Call-Put** (`CP`) (`callPut` / `2`): Combination of call and put option.
