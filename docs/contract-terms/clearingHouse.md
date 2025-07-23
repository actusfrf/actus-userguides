---
id: clearingHouse
title: Clearing House
sidebar_label: Clearing House
---

## Clearing House

**Acronym**: `MRCLH`  
**Identifier**: `clearingHouse`  
**Group**: `Margining`  
**Type**: `Enum`  
**Default**: ``  

### Description
Indicates wheter CRID takes a clearing house function or not. In other word, whether CRID receive margins (MRIM, MRVM).

### Allowed Values
- **Is Clearing House** (`Y`) (`isClearingHouse` / `0`): Contract creator is the clearing house.
- **Is Not Clearing House** (`N`) (`isNotClearingHouse` / `1`): Contract creator is not the clearing house.
