---
id: boundaryDirection
title: Boundary Direction
sidebar_label: Boundary Direction
---

## Boundary Direction

**Acronym**: `BDR`  
**Identifier**: `boundaryDirection`  
**Group**: `Boundary`  
**Type**: `Enum`  
**Default**: ``  

### Description
Boundary direction specifies the direction of motion in the underlying asset's price which will be considered a valid crossing of the boundary and trigger the boundary effect changing which, if any, of the boundary legs is  active.

### Allowed Values
- **From Below** (`INCR`) (`fromBelow` / `0`): Boundary effect is trigerred if the observed underlying asset value is greater than or equal to the boundary value at a monitor time.
- **From Above** (`DECR`) (`fromAbove` / `1`): Boundary action if observed market object value less than or equal to boundary value at a monitor time.
