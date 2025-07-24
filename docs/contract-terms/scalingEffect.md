---
id: scalingEffect
title: Scaling Effect
sidebar_label: Scaling Effect
---

## Scaling Effect

**Acronym**: `SCEF`  
**Identifier**: `scalingEffect`  
**Group**: `Notional Principal`  
**Type**: `Enum`  
**Default**: `000
`  

### Description
Indicates which payments are scaled. I = Interest payments, N = Nominal payments and M = Maximum deferred interest amount. They can be scaled in any combination.

### Allowed Values
- **No Scaling** (`000`) (`noScaling` / `0`): No scaling applies.
- **Interest is Scaled** (`I00`) (`interestIsScaled` / `1`): Scaling applies only to interest.
- **Principal is Scaled** (`0N0`) (`principalIsScaled` / `2`): Scaling applies only to principal.
- **Interest and Principal is Scaled** (`IN0`) (`interestAndPrincipalIsScaled` / `3`): Scaling applies to interest and principal.
