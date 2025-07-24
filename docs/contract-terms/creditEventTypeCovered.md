---
id: creditEventTypeCovered
title: Credit Event Type Covered
sidebar_label: Credit Event Type Covered
---

## Credit Event Type Covered

**Acronym**: `CETC`  
**Identifier**: `creditEventTypeCovered`  
**Group**: `Counterparty`  
**Type**: `Enum[]`  
**Default**: `DF`  

### Description
The type of credit events covered e.g. in credit enhancement or credit default swap contracts. Only the defined credit event types may trigger the protection.

### Allowed Values
- **Delayed** (`DL`) (`delayed` / `0`): Delay of the underlying represents a credit event.
- **Delinquent** (`DQ`) (`delinquent` / `1`): Delinquency of the underlying represents a credit event.
- **Default** (`DF`) (`default` / `2`): Default of the underlying represents a credit event.
