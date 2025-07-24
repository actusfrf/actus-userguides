---
id: boundaryEffect
title: Boundary Effect
sidebar_label: Boundary Effect
---

## Boundary Effect

**Acronym**: `BEF`  
**Identifier**: `boundaryEffect`  
**Group**: `Boundary`  
**Type**: `Enum`  
**Default**: ``  

### Description
This term specifies which leg - if any-  becomes the active subcontract  when the underlying asset's price crosses the specified boundary value in the specified direction triggerring a boundary crossing event.

### Allowed Values
- **KnockIN First Leg** (`INFIL`) (`knockINFirstLeg` / `0`): effect of boundary crossing is to knock IN the first leg making this the active contract; monitoring of the boundary stops.
- **KnockIN Second Leg** (`INSEL`) (`knockINSecondLeg` / `1`): effect of boundary crossing is to knock IN the Second Leg making this the active contract; monitoring of the boundary stops.
- **KnockOUT Current Leg** (`OUT`) (`knockOUTCurrentLeg` / `2`): effect of boundary crossing is to knockOUT any active contract so there is no active contract after the boundary crossing; monitoring of the boundary stops.
