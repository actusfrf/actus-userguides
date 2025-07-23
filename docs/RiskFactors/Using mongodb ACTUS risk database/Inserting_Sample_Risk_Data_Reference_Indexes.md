---
title: "Insert Reference Index"
---

**Overview**

In the previous section, we **cleared the riskdata store** to prepare it for new sample data. Now, we will insert **sample reference indexes**, **scenarios**, and **contract behavior model samples** while explaining each step.  

This section focuses on **creating and saving market reference index projections**.

## Accessing Sample ACTUS Commands
To follow along, you need access to the **sample ACTUS commands folder**. If you have installed **ACTUS Basic Quickstart**, the commands are available at:

```bash
ACTUS-QUICKSTART_HOME/actus-docker-networks/test
```
To run the commands, open a **terminal/command window** in this folder.

> **Note:** If using **Windows**, open a **Linux PowerShell**.

## Creating a Market Reference Index

Run the following command to **create and save** a new reference index:

```sh
source putMSFT_rising.txt
```

This command creates a new reference index with:

ID: `MSFT_rising`

Stored in: `referenceIndex` collection of the `riskdata` database.

## What Is `MSFT_rising`?

It is a projection of future Microsoft Stock prices in a risk scenario.
The objective is to estimate the likely path of 5-year U.S. Treasury interest rates over the coming five years, enabling more informed investment and policy decisions.
For proper risk analysis, multiple scenarios can be created:

- MSFT_steady (stable market)

- MSFT_falling (declining market)

A financial contract involving Microsoft Stock (Futures, Options, Purchases, or Sales) can be simulated under different market risk scenarios, generating distinct cashflow sequences.

## Reference Index Attributes

Each reference index includes:

| Attribute         | Description                                      |
|------------------|--------------------------------------------------|
| `riskFactorID`   | Unique identifier for the reference index       |
| `marketObjectCode` | Market object being projected                 |
| `base`           | Scaling type (absolute values or percentages)   |
| `data`           | Time series of `<date, value>` pairs            |


## Sample JSON for MSFT_rising

The command in `Test_B/putMSFT_rising.txt` contains JSON data stored in MongoDB.
Formatted, it looks like:

```
{
  "riskFactorID": "MSFT_rising",
  "marketObjectCode": "MSFT",
  "base": 1.0,
  "data": [
    { "time": "2023-06-01T00:00:00", "value": 105 },
    { "time": "2023-09-01T00:00:00", "value": 112 },
    { "time": "2024-01-01T00:00:00", "value": 129 }
  ]
}
```

## Creating a Reference Index for US Treasury Bonds (5-Year)

To create a reference index for 5-year U.S. Treasury bonds, run:

```
source putUst5Y_falling.txt
```

This command creates:

**ID**: `ust5Y_falling`

**Purpose**: A future projection of 5-year U.S. Treasury bond interest rates.

## Why Use ust5Y_falling?

- Variable-rate loans adjust interest rates at specific dates.

- The contract defines a market rate to calculate new rates.

- The new interest rate is calculated as:
```
new rate = contract spread + current reference index value
```
To analyze cashflow variability, multiple indexes can be used:

`ust5Y_falling`

`ust5Y_steady`

`ust5Y_rising`

## Viewing the ust5Y_falling Attributes
To see the data, format the file:
```
putUst5Y_falling.txt
```
