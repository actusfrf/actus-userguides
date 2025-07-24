---
id: cycleOfScalingIndex
title: Cycle Of Scaling Index
sidebar_label: Cycle Of Scaling Index
---

## Cycle Of Scaling Index

**Acronym**: `SCCL`  
**Identifier**: `cycleOfScalingIndex`  
**Group**: `Notional Principal`  
**Type**: `Cycle`  
**Default**: ``  

### Description
Cycle according to which the scaling date schedule will be calculated.
In case SCCL is not set, then there will only be one scaling event at SCANX given SCANX is set.
The interval will be adjusted yet by EOMC and BDC.

### Allowed Values
- `[ISO8601 Duration]L[s={0,1}]`
