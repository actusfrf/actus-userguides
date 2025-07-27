---
id: endOfMonthConvention
title: End Of Month Convention
sidebar_label: End Of Month Convention
---

## End Of Month Convention

**Acronym**: `EOMC`  
**Identifier**: `endOfMonthConvention`  
**Group**: `Calendar`  
**Type**: `Enum`  
**Default**: `sd`  

### Description
When computing schedules a special problem arises if an anchor date is at the end of a month and a cycle of monthly or quarterly is applied (yearly in the case of leap years only). How do we have to interpret an anchor date April 30 plus 1M cycles? In case where EOM is selected, it will jump to the 31st of May, then June 30, July 31 and so on. If SM is selected, it will jump to the 30st always with of course an exception in February. 
This logic applies for all months having 30 or less days and an anchor date at the last day. Month with 31 days will at any rate jump to the last of the month if anchor date is on the last day.

### Allowed Values
- **Same Day** (`SD`) (`sameDay` / `0`): Schedule times always fall on the schedule anchor date day of the month.
- **End of Month** (`EOM`) (`endOfMonth` / `1`): Schedule times fall on the end of every month if the anchor date represents the last day of the respective month.
