---
id: contract-terms-overview
title: Contract Terms Overview
sidebar_label: Contract Terms Overview
---

## Contract Terms Overview

ACTUS defines a comprehensive set of **Contract Terms (also refered to as Contract Attributes or CAs)** that are used to parameterize contract types in a precise and standardized way. These terms represent the input values that determine a contract's behavior over time — including its cash flows, lifecycle events, and state transitions.

Each contract term is described in its own reference page, which provides the following standardized information:

- **Acronym**: A short label used in formulas or systems (e.g., `IPDC`).
- **Identifier**: The programmatic name of the term (e.g., `dayCountConvention`).
- **Group**: A logical grouping based on the contract function (e.g., `Interest`, `Principal`, `Schedule`).
- **Type**: The data type of the value (e.g., `Enum`, `Float`, `Date`, `Boolean`).
- **Default**: The default value, if applicable.
- **Description**: A short explanation of the term’s meaning and role.
- **Allowed Values**: For enumerated types, a list of permitted options and what they represent.

For detailed definitions, visit any individual term page — for example:
- [Day Count Convention](./dayCountConvention)

To understand how contract terms are used within a specific contract type, refer to the [Contract Types Reference](../contract-types/PAM.md).

---