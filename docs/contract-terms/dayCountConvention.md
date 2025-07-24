---
id: dayCountConvention
title: Day Count Convention
sidebar_label: Day Count Convention
---

## Day Count Convention

**Acronym**: `IPDC`  
**Identifier**: `dayCountConvention`  
**Group**: `Interest`  
**Type**: `Enum`  
**Default**: ``  

### Description
Method defining how days are counted between two dates. This finally defines the year fraction in accrual calculations.

### Allowed Values
- **Actual/Actual** (`AA`) (`actualActual` / `0`): Year fractions accrue on the basis of the actual number of days per month and per year in the respective period.
- **Actual Three Sixty** (`A360`) (`actualThreeSixty` / `1`): Year fractions accrue on the basis of the actual number of days per month and 360 days per year in the respective period.
- **Actual Three Sixty Five** (`A365`) (`actualThreeSixtyFive` / `2`): Year fractions accrue on the basis of the actual number of days per month and 365 days per year in the respective period.
- **Thirty E Three Sixty ISDA** (`30E360ISDA`) (`thirtyEThreeSixtyISDA` / `3`): Year fractions accrue on the basis of 30 days per month and 360 days per year in the respective period (ISDA method).
- **Thirty E Three Sixty** (`30E360`) (`thirtyEThreeSixty` / `4`): Year fractions accrue on the basis of 30 days per month and 360 days per year in the respective period.
- **Twenty Eight E Three Thirty Six** (`28E336`) (`twentyEightEThreeThirtySix` / `5`): Year fractions accrue on the basis of 28 days per month and 336 days per year in the respective period.
