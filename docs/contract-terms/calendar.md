---
id: calendar
title: Calendar
sidebar_label: Calendar
---

## Calendar

**Acronym**: `CLDR`  
**Identifier**: `calendar`  
**Group**: `Calendar`  
**Type**: `Enum`  
**Default**: `noCalendar`  

### Description
Calendar defines the non-working days which affect the dates of contract events (CDE's) in combination with EOMC and BDC. Custom calendars can be added as additional enum options.

### Allowed Values
- **No Calendar** (`NC`) (`noCalendar` / `0`): No holidays defined
- **MondayToFriday** (`MF`) (`mondayToFriday` / `1`): Saturdays and Sundays are holidays
