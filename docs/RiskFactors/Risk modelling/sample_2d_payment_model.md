---
sidebar_position: 2
---

# Setting Up a Sample

The **actus-riskservice-ce** component in ACTUS Quickstart includes a sample **two-dimensional prepayment behavior risk model** for analyzing prepayment risks in loan contracts.

---

## 1. Design Approach  

This model uses two key parameters:  

1. **Interest Rate Differential**:  
   - The difference between the **current nominal interest rate** on the loan and the **current market interest rate** for refinancing.  
   - If refinancing is favorable (i.e., market rate is lower than the loan rate), prepayment is more likely.

2. **Remaining Loan Maturity**:  
   - If the loan is close to maturity, refinancing costs may discourage prepayment.  
   - If maturity is far off, refinancing is more attractive.  

### Model Execution  
- The model is called at **specific simulation times** to determine potential prepayment amounts.  
- A **lookup table** (2D surface) maps the probability or amount of prepayment based on interest rate differentials and time to maturity.

This model is a **basic example**; more advanced risk models can be integrated using the **ACTUS riskservice API**.

---

## 2. Creating a Prepayment Model Instance  

To define and store a **sample prepayment model instance**, use:  

```bash
 source putPpm01.txt
```

# Loading Model Attributes from `putPpm01.txt` into `riskdata` Database

This command loads model attributes from `putPpm01.txt` and saves them in the `riskdata` database.

## Attributes of `ppm01` (Example Model)

- **Risk Factor ID**: `"ppm01"` (Unique identifier for the model)  
- **Reference Rate ID**: `"ust5Y"` (5-year US Treasury rate as benchmark)  
- **Prepayment Event Times**:  
  - `"2015-03-01"`  
  - `"2015-09-01"`  
  - `"2016-03-01"`  
- **Lookup Surface**: Defines prepayment probabilities for different interest rate differentials and maturities.
# JSON Representation of `ppm01`
```bash
{
  "riskFactorId": "ppm01",
  "referenceRateId": "ust5Y",
  "prepaymentEventTimes": ["2015-03-01", "2015-09-01", "2016-03-01"],
  "surface": {
    "interpolationMethod": "linear",
    "extrapolationMethod": "constant",
    "margins": [
      { "dimension": 1, "values": [0.03, 0.025, 0.02, 0.015, 0.01, 0.0, -0.05] },
      { "dimension": 2, "values": [0, 1, 2, 3, 5, 10] }
    ],
    "data": [
      [0.01, 0.05, 0.1, 0.07, 0.02, 0],
      [0.01, 0.04, 0.8, 0.05, 0.01, 0],
      [0, 0.02, 0.5, 0.03, 0.005, 0],
      [0, 0.01, 0.3, 0.01, 0, 0],
      [0, 0.01, 0.2, 0, 0, 0],
      [0, 0, 0.1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ]
  }
}
```

# Prepayment Model Details

## Lookup Surface

- **Margins**: Defines interest rate differentials (x-axis) and years until maturity (y-axis).  
- **Data**: Specifies prepayment fractions for each combination of interest rate differential and maturity.  

## Adding the Prepayment Model to a Risk Scenario

To make this model available in a risk scenario, create a scenario called `"scn02"` that includes `"ppm01"`.  

```bash
 source putScn02.txt
```

# Loading `scn02` into the Riskdata Database

This command loads `putScn02.txt` and saves `"scn02"` in the `riskdata` database, linking it to `"ppm01"`.

## Summary

1. **Define a Prepayment Model Instance (`ppm01`)**  
   - Uses interest rate differential and loan maturity to estimate prepayment.  
   - Stored in `riskdata` using `putPpm01.txt`.  

2. **Store the Model in a Risk Scenario (`scn02`)**  
   - Links `ppm01` to `scn02` using `putScn02.txt`.  

3. **Run Commands to Load the Model and Scenario**  
   ```sh
   source putPpm01.txt  # Create prepayment model
   source putScn02.txt  # Create scenario with model
   ```

