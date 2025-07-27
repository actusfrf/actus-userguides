---
id: businessDayConvention
title: Business Day Convention
sidebar_label: Business Day Convention
---

## Business Day Convention

**Acronym**: `BDC`  
**Identifier**: `businessDayConvention`  
**Group**: `Calendar`  
**Type**: `Enum`  
**Default**: `nos`  

### Description
BDC's are linked to a calendar. Calendars have working and non-working days. A BDC value other than N means that cash flows cannot fall on non-working days, they must be shifted to the next business day (following) or the previous on (preceding).
These two simple rules get refined twofold:
- Following modified (preceding): Same like following (preceding), however if a cash flow gets shifted into a new month, then  it is shifted to preceding (following) business day.
- Shift/calculate (SC) and calculate/shift (CS). Accrual, principal, and possibly other calculations are affected by this choice. In the case of SC first the dates are shifted and after the shift cash flows are calculated. In the case of CS it is the other way round.
Attention: Does not affect non-cyclical dates such as PRD, MD, TD, IPCED since they can be set to the correct date directly.

### Allowed Values
- **No Shift** (`NOS`) (`noShift` / `0`): No shift applied to non-business days.
- **Shift-Calculate Following** (`SCF`) (`shiftCalculateFollowing` / `1`): Shift event dates first then calculate accruals etc. Strictly shift to the next following business day.
- **Shift-Calculate Modified-Following** (`SCMF`) (`shiftCalculateModifiedFollowing` / `2`): Shift event dates first then calculate accruals etc. Shift to the next following business day if this falls in the same month. Shift to the most recent preceding business day otherwise.
- **Calculate-Shift Following** (`CSF`) (`calculateShiftFollowing` / `3`): Calculate accruals etc. first then shift event dates. Strictly shift to the next following business day.
- **Calculate-Shift Modified-Following** (`CSMF`) (`calculateShiftModifiedFollowing` / `4`): Calculate accruals etc. first then shift event dates. Shift to the next following business day if this falls in the same month. Shift to the most recent preceding business day otherwise.
- **Shift-Calculate Preceding** (`SCP`) (`shiftCalculatePreceding` / `5`): Shift event dates first then calculate accruals etc. Strictly shift to the most recent preceding business day.
- **Shift-Calculate Modified-Preceding** (`SCMP`) (`shiftCalculateModifiedPreceding` / `6`): Shift event dates first then calculate accruals etc. Shift to the most recent preceding business day if this falls in the same month. Shift to the next following business day otherwise.
- **Calculate-Shift Preceding** (`CSP`) (`calculateShiftPreceding` / `7`): Calculate accruals etc. first then shift event dates. Strictly shift to the most recent preceding business day.
- **Calculate-Shift Modified-Preceding** (`SCMP`) (`calculateShiftModifiedPreceding` / `8`): Calculate accruals etc. first then shift event dates. Shift to the most recent preceding business day if this falls in the same month. Shift to the next following business day otherwise.
