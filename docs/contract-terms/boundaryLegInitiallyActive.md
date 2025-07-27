---
id: boundaryLegInitiallyActive
title: Boundary Leg Initially Active
sidebar_label: Boundary Leg Initially Active
---

## Boundary Leg Initially Active

**Acronym**: `BLIA`  
**Identifier**: `boundaryLegInitiallyActive`  
**Group**: `Boundary`  
**Type**: `Enum`  
**Default**: `there is no active subcontract`  

### Description
Specifies which leg - if any - is the active contract  in effect when the boundary controlled switch contract starts.

### Allowed Values
- **First Leg** (`FIL`) (`firstLeg` / `0`): the first leg is active when the boundary controlled switch contract is initialized.
- **Second Leg** (`SEL`) (`secondLeg` / `1`): the second leg is active when the boundary controlled switch contract starts.
- **Null** (`Null`) (`Null` / `2`): there is no active subcontract when the boundary controlled switch contract starts.
