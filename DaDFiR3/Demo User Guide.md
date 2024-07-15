# Companion User Guide for ACTUS Portfolio Analysis with Interest Rate Risk Scenarios

## Document Purpose

This document provides guidance for users of the ACTUS demonstrations, specifically focusing on:

- **ACTUS portfolio analysis with interest rate risk scenarios** – [https://dadfir3.shinyapps.io/DaDFiR3demo](https://dadfir3.shinyapps.io/DaDFiR3demo)

Software demonstrations should be self-explanatory and self-documenting. However, missing context and required user actions can make exploring the demo capabilities difficult and frustrating. This companion user guide aims to help users navigate these obstacles. While the demonstration software and in-demo documentation will eventually be updated to address these issues, this user guide provides an immediate solution and highlights the areas needing improvement.

### Overview

This guide assists users in navigating the ACTUS portfolio analysis demo for interest rate risk scenarios. The demo can be accessed online at [https://dadfir3.shinyapps.io/DaDFiR3demo](https://dadfir3.shinyapps.io/DaDFiR3demo) or installed locally by following the instructions provided in the [ACTUS-Rshiny-demo User Guide](https://github.com/actusfrf/actus-userguides/blob/main/ACTUS-Rshiny-demo/UserGuide.md).

### Cloud vs. Local Installation

The demo operates similarly on both cloud and local installations. The local version offers a configuration option, allowing it to use the remote ACTUS server at [https://demo.actusfrf.org:8080](https://demo.actusfrf.org:8080) or a local ACTUS server and MongoDB database for persistent data storage.

### Purpose

The purpose of this demo is to illustrate how ACTUS can simulate cash flows for individual contracts or portfolios based on various interest rate scenarios. The demo supports different interest rate projections, particularly for US 5-year treasury bonds, impacting variable rate contracts. It provides graphical plots of cash flows, profit, or liquidity over time.

### Key Value Proposition

ACTUS excels in accurately calculating income and liquidity behavior for portfolios under different market risk scenarios, demonstrating its value in precise financial analysis.



### Steps in working this demo:

1. The demo comes up in a display with five tabs in the title bar:
   - Interest Rate Scenarios
   - Loan Contract cashflow
   - Portfolio analysis
   - Uploaded Portfolio Analysis
   - Help
    
 ![alt text](image.png)

2. ‘Help’ is logically the first tab to open
   - This tab provides a short description of the content of the other tabs.
   - If you are using the – on local workstation – version of the ACTUS-Rshiny-demo, there is an option to configure it to work either with the remote ACTUS server at [https://demo.actusfrf.org:8080](https://demo.actusfrf.org:8080/) or to a local ACTUS service typically at [http://host.docker.internal:8083/](http://host.docker.internal:8083/). - If you are using the -on Rshiny cloud – version of the ACTUS-RShiny-demo, it is always configured to use the ACTUS server at [https://demo.actusfrf.org:8080](https://demo.actusfrf.org:8080/) and there is no option to change this. 

3. ### Interest Rate Scenarios 

The **Interest Rate Scenarios** tab provides market risk scenario data available in the demo.

- **Choose a Dataset**: Clicking on the ‘Choose a dataset’ dropdown allows you to select a different interest rate scenario from the following options:
  - Steady rates

  ![alt text](image-1.png)

  - Decreasing rates

  ![alt text](image-3.png)

  - Recovering rates

  ![alt text](image-4.png)

  - Increasing rates

  ![alt text](image-2.png)

- **Plot of Interest Rates**: Each selection displays a plot of interest rates over time:
  - **Y-axis**: %pa (percentage per annum) interest rate
  - **X-axis**: Date

- **Historical and Projected Rates**:
  - Historical rates are shown up to September 2022.
  - Projections for future interest rates vary based on the scenario selected, leading to different projected interest rates after September 2022.

- **Base Rate**: The historical data and projected future rates are for the US 5-year Treasury bonds. This market index is used as the base rate (marketObjectCodeOfRateReset) for all variable rate contracts in the demo.

- **Rate Reset**: When a rate reset occurs on a variable rate contract, the new rate is computed as:
  - (Projected or actual base rate for the simulated time) + rateSpread for the variable rate contract


4. ### Loan Contract Cashflow

The **Loan Contract Cashflow** section allows users to define and analyze the cashflows of various loan contracts using the ACTUS framework. This feature supports detailed customization of contract terms, providing valuable insights into financial obligations over the contract's lifespan. Below is an overview of the configurable parameters and their significance.

#### Loan Contract Type

You can choose between two types of loan contracts:

- **PAM (Principal at Maturity)**: In this type of contract, the principal amount is paid in full at the maturity date, with periodic interest payments made throughout the contract term. This structure is suitable for borrowers who prefer to defer the principal repayment until the end of the contract term.

- **ANN (Annuity)**: This contract involves regular periodic payments that include both principal and interest. Each payment reduces the outstanding principal over time, making it ideal for borrowers who prefer to repay the loan in equal installments over the contract term.

#### Choose Issue Date

Select the issue date of the loan contract. This date marks the commencement of the loan, from which all subsequent payments and interest accruals are calculated.

#### Choose Maturity

Use the slider to set the maturity period of the loan. The maturity period can range from 1 to 30 years, determining the duration over which the loan will be repaid.

#### Set Loan Amount

Specify the principal amount of the loan. This is the initial sum of money that the borrower receives and agrees to repay under the terms of the loan contract.

#### Interest Rate

Enter the interest rate for the loan. This rate determines the cost of borrowing and is applied to the outstanding principal to calculate the interest payments.

#### Payment Frequency

Set the frequency of payments for the loan. Options include:
- Every 3 months
- Every 6 months
- Every 1 year

#### Rate Reset Frequency

Choose the frequency at which the interest rate is reset. Options include:
- Fixed rate
- Every 1 month
- Every 3 months
- Every 6 months
- Every 1 year

This parameter is crucial for loans with variable interest rates, where the rate may be adjusted periodically based on market conditions.

#### Rate Reset Spread

Specify the rate reset spread. This is the margin added to the reference interest rate during each reset, affecting the total interest rate applied to the loan.

#### Interest Rate Scenario

Select the interest rate scenario to analyze the impact of different market conditions on the loan. Available scenarios include:
- Increasing Rates
- Decreasing Rates
- Steady Rates
- Recovering Rates

Each scenario provides a different projection of interest rate movements, helping users understand potential financial outcomes under varying economic conditions.

#### Interactive Simulation

Changing any of these contract or risk factor parameters will cause the cashflows to be recomputed. There may be a delay of 2-3 seconds with an in-process icon displayed before the new cashflow is shown on the right side of the display.

- **Fixed vs. Variable Rate Contracts**:
  - If the contract is Fixed Rate, changing the interest rate scenario will recompute the cashflow, but the resulting values will remain unchanged.
  - If the contract is Variable Rate, different interest rate scenarios will result in visibly different cashflows.

#### Cashflow Results

The generated cashflow results are shown on the right side of the display in two forms:
- **Graphical Representation**: Similar to the Sample ACTUS Contract Cashflows Demo. The x-axis represents time, with arrows showing the direction of payments at different times. Red arrows indicate Principal payments, and green arrows indicate Interest payments. Accrued levels of principal and interest are displayed as dotted lines.
- **Tabular Listing**: Below the graphical representation, a tabular listing of the generated cashflow events is displayed, including date, event type, and event parameters. The event types are described in the [ACTUS data dictionary](https://github.com/actusfrf/actus-dictionary/blob/master/actus-dictionary-event.json).

### Example Scenarios and Interpretations

**Scenario 1:**

![alt text](image-5.png)

**Interpretation:**

In this scenario, we examine a Principal at Maturity (PAM) contract with the following details:


- **Loan contract type:** PAM
- **Issue date:** 2015-02-01
- **Maturity:** 5 years
- **Loan amount:** 1000 CHF
- **Interest rate:** 0.02 (2%)
- **Payment frequency:** Every 3 months
- **Rate reset frequency:** Fixed rate
- **Rate reset spread:** 0.05
- **Interest rate scenario:** Decreasing Rates

The generated cashflow plot and event list provide a detailed visualization and breakdown of the loan’s financial dynamics over its term.

#### Cashflow Plot Analysis:

1. **Principal (Notional) Amount:**
   - The red dashed line represents the principal amount of 1000 CHF, which remains constant throughout the contract term until it is repaid in full at maturity (2020-02-01).

2. **Interest Payments (IP):**
   - The green arrows indicate the periodic interest payments made every 3 months. Despite the interest rate being fixed at 2%, the payment frequency and fixed rate setup ensure that these payments remain consistent over time.

3. **Interest Accrual:**
   - The dashed green lines represent the accrual of interest between payment dates. Each accrual period culminates in an interest payment.

#### Event List:

The event list provides a detailed breakdown of each financial transaction over the loan term:

![alt text](image-6.png)

- **IED (Initial Exchange Date):**
  The initial loan disbursement of 1000 CHF occurs on 2015-02-01.

- **IP (Interest Payment):**
  Interest payments of -5 CHF are made every 3 months, reflecting the 2% annual interest rate on the 1000 CHF principal.

- **Principal Repayment:**
  The principal amount is repaid in full at maturity (2020-02-01).

**Scenario 2:**

![alt text](image-7.png)

**Interpretation:**

In this scenario, we examine a Principal at Maturity (PAM) contract with the following details:

- **Loan contract type:** PAM
- **Issue date:** 2015-02-01
- **Maturity:** 5 years
- **Loan amount:** 1000 CHF
- **Interest rate:** 0.02 (2%)
- **Payment frequency:** Every 3 months
- **Rate reset frequency:** Every 3 months
- **Rate reset spread:** 0.05
- **Interest rate scenario:** Decreasing Rates

The generated cashflow plot and event list provide a detailed visualization and breakdown of the loan’s financial dynamics over its term.

#### Cashflow Plot Analysis:

1. **Principal (Notional) Amount:**
   - The red dashed line represents the principal amount of 1000 CHF, which remains constant throughout the contract term until it is repaid in full at maturity (2020-02-01).

2. **Interest Payments (IP):**
   - The green arrows indicate the periodic interest payments made every 3 months. The interest payments vary due to the rate reset every 3 months according to the decreasing rates scenario.

3. **Interest Accrual:**
   - The dashed green lines represent the accrual of interest between payment dates. Each accrual period culminates in an interest payment.

4. **Rate Reset (RR):**
   - The rate reset events are marked with green "RR" labels on the plot, indicating when the interest rate is adjusted.

#### Event List:

![alt text](image-8.png)

The event list provides a detailed breakdown of each financial transaction over the loan term. It includes initial exchange date (IED), interest payments (IP), and rate resets (RR). The interest payments are made every 3 months, reflecting the 2% annual interest rate on the 1000 CHF principal. Due to the rate reset every 3 months according to the decreasing rates scenario, the amount of interest payments varies. The principal amount is repaid in full at maturity (2020-02-01).

- **IED (Initial Exchange Date):**
  The initial loan disbursement of 1000 CHF occurs on 2015-02-01.

- **IP (Interest Payment):**
  Interest payments are made every 3 months. The amount varies due to the rate resets every 3 months according to the decreasing rates scenario.

- **RR (Rate Reset):**
  The interest rate is adjusted every 3 months based on the rate reset frequency and the specified rate spread.

- **Principal Repayment:**
  The principal amount is repaid in full at maturity (2020-02-01).

Overall, this scenario provides a clear view of the financial obligations under a PAM contract with decreasing interest rates. The periodic interest payments vary due to the rate resets, and the final principal repayment is made at maturity.

**Scenario 3:**

![alt text](image-9.png)

## Interpretation:

In this scenario, we analyze a Principal at Maturity (PAM) contract with the following details:

- **Loan contract type:** PAM
- **Issue date:** 2018-01-01
- **Maturity:** 5 years
- **Loan amount:** 5000 CHF
- **Interest rate:** 0.03 (3%)
- **Payment frequency:** Every 6 months
- **Rate reset frequency:** Every 6 months
- **Rate reset spread:** 0.04
- **Interest rate scenario:** Increasing Rates

The generated cashflow plot and event list provide a detailed visualization and breakdown of the loan’s financial dynamics over its term.

### Cashflow Plot Analysis:

1. **Principal (Notional) Amount:**
   - The red dashed line represents the principal amount of 5000 CHF, which remains constant throughout the contract term until it is repaid in full at maturity (2023-01-01).

2. **Interest Payments (IP):**
   - The green arrows indicate the periodic interest payments made every 6 months. The interest payments vary due to the rate reset every 6 months according to the increasing rates scenario.

3. **Interest Accrual:**
   - The dashed green lines represent the accrual of interest between payment dates. Each accrual period culminates in an interest payment.

4. **Rate Reset (RR):**
   - The rate reset events are marked with green "RR" labels on the plot, indicating when the interest rate is adjusted.

### Event List:

The event list provides a detailed breakdown of each financial transaction over the loan term.

![alt text](image-10.png)

### Key Points:

- **IED (Initial Exchange Date):** The initial loan disbursement of 5000 CHF occurs on 2018-01-01.
- **IP (Interest Payment):** Interest payments are made every 6 months. The amount varies due to the rate resets every 6 months according to the increasing rates scenario.
- **RR (Rate Reset):** The interest rate is adjusted every 6 months based on the rate reset frequency and the specified rate spread.
- **Principal Repayment:** The principal amount is repaid in full at maturity (2023-01-01).

**Scenario 4:**

![alt text](image-11.png)

## Interpretation:

In this scenario, we examine a Principal at Maturity (PAM) contract with the following details:

- **Loan contract type**: PAM
- **Issue date**: 2017-03-15
- **Maturity**: 7 years
- **Loan amount**: 7500 CHF
- **Interest rate**: 0.015 (1.5%)
- **Payment frequency**: Every 3 months
- **Rate reset frequency**: Every 3 months
- **Rate reset spread**: 0.03
- **Interest rate scenario**: Recovering Rates

The generated cashflow plot and event list provide a detailed visualization and breakdown of the loan’s financial dynamics over its term.


5. ### Portfolio Analysis

The **Portfolio Analysis** tab allows users to evaluate the income and liquidity over time for a portfolio of ACTUS contracts. Here’s a detailed guide on how to utilize this feature effectively:

![alt text](image-12.png)


In the Portfolio Analysis section of the DaDFiR3 Demo application, you can perform advanced analytics on predefined portfolios. This feature allows you to examine income and liquidity metrics, displayed in plots and detailed in the DataTable. This guide will walk you through the process of selecting portfolios, choosing analysis types, and interpreting the results.

#### Steps to Perform Portfolio Analysis

1. **Choose Your Portfolio**:
   - Select a portfolio from the dropdown menu. Examples include "BondPortfolio" or "MortgagePortfolio."

2. **Choose the Analysis Type**:
   - Select the type of analysis you want to perform from the dropdown menu. Available options are:
     - Monthly Income
     - Cumulative Income
     - Monthly Liquidity Change
     - Accumulated Liquidity

3. **Choose the Risk Factor Scenario**:
   - Select the risk factor scenario to analyze how different rate changes impact the portfolio. The options include:
     - Increasing Rates
     - Decreasing Rates
     - Steady Rates
     - Recovering Rates

4. **Download Events**:
   - Click on the "Download Events" button to download a detailed list of events related to your portfolio's performance under the selected analysis type and risk factor scenario.

#### Interpreting the Results

- **Monthly Income Analysis**:
  - The plot displays the monthly income generated by the portfolio over the selected period.
  - The DataTable lists each contract within the portfolio, showing details such as contract type, status date, contract role, interest rates, and more.

- **Cumulative Income Analysis**:
  - This analysis accumulates the income over time, providing a comprehensive view of the portfolio's income performance.
  - The plot and DataTable help you understand how income has grown over the specified period.

- **Monthly Liquidity Change Analysis**:
  - This option highlights the changes in liquidity on a monthly basis, allowing you to see how the portfolio's cash flow fluctuates.
  - The plot shows liquidity changes, and the DataTable provides contract-specific details.

- **Accumulated Liquidity Analysis**:
  - This analysis presents the total liquidity accumulated over time.
  - Use the plot to visualize liquidity trends and the DataTable to see detailed contract information.

#### How to Use the DataTable

The DataTable includes several columns, each providing valuable data about the contracts in the portfolio. Here's how you can interpret and use this information:

- **contractType**: Indicates the type of contract (e.g., PAM, ANN).
- **statusDate**: The date when the contract's status was last updated.
- **contractRole**: The role of the contract within the portfolio (e.g., RPA for Repurchase Agreement).
- **contractID**: A unique identifier for the contract.
- **nominalInterestRate**: The nominal interest rate applied to the contract.
- **currency**: The currency in which the contract is denominated.
- **initialExchangeDate**: The date when the initial exchange of cash flows occurred.
- **premiumDiscountAtIED**: The premium or discount applied at the initial exchange date.
- **maturityDate**: The date when the contract matures.
- **notionalPrincipal**: The notional principal amount of the contract.
- **rateSpread**: The spread applied to the interest rate.
- **description**: A brief description of the contract's key features and conditions.

#### More Details

- **Contract Terms View**: A view of some contract terms of the selected portfolio is shown in the lower part of the display on the right side. Due to technical issues with displaying detailed tables in Rshiny, only the first 8 terms of each contract are shown.
- **CSV Files**: The complete CSV files, `AnnuityPortfolio.csv` and `BondPortfolio.csv`, are available along with this document. They can be viewed using a text editor or more conveniently by importing them into MS Excel. Note that when CSV files are imported into Excel, date fields may convert to a non-ISO standard date format.
- **Risk Factor Scenarios**: You can choose a risk factor/interest scenario for the portfolio simulation and report from any of the four scenarios displayed in the ‘Interest Rate Scenario’ tab.
- **Income Report**: The generated income report is displayed on the right side of the display and shows the total interest income for the portfolio month by month. It can be viewed as:
  - A sum of the total interest income.
  - A cumulative total income from the status date of the portfolio.
- **Liquidity Report**: The generated liquidity report displays the net sum of interest paid and principal movements computed month by month from the portfolio's aggregated cashflows. This can be viewed as:
  - Raw month-by-month values.
  - A cumulative total from the status date of the portfolio.


6. ### Uploaded Portfolio Analysis

The **Uploaded Portfolio Analysis** feature allows you to upload a portfolio of ACTUS contracts from your workstation and perform the same analyses as in the **Portfolio Analysis** tab.

![alt text](image-13.png)

- **File Format Requirements**: The uploaded files must match the format of the example files `AnnuityPortfolio.csv` and `BondPortfolio.csv`. Mixed files with both PAM (Principal at Maturity) and ANN (Annuity) contracts are permitted.
  
- **Uploading a File**:
  - Click on the **Browse** button.
  - Select a file from your workstation.
  - Click on **Open** to upload the portfolio into the demo.

- **CSV File Formatting**: 
  - Ensure that the CSV file is correctly formatted. If the file is properly formatted, the analysis selected by the current choices for analysis type and risk factor scenario will be performed and displayed.
  - If editing the portfolio files with Microsoft Excel, ensure that all date values are entered in the format `yyyy-mm-dd`. This prevents Excel from reformatting date fields unpredictably. Begin each date value with a blank space character to ensure they are treated as character strings rather than dates.

- **Example Files**: The example files `BondPortfolioX.csv` and `AnnuityPortfolioX.csv` available in the DaDFiR3demo git repository are formatted correctly and can be uploaded and analyzed.

### Steps to Perform Uploaded Portfolio Analysis

1. **Upload Your File**:
   - Click **Browse** to select and upload a `.csv` file from your workstation.

2. **Choose the Analysis Type**:
   - Select the type of analysis you want to perform from the dropdown menu:
     - Monthly Income: Analyze the monthly income generated by the portfolio.
     - Cumulative Income: View the accumulated income over time.
     - Monthly Liquidity Change: Observe changes in liquidity on a monthly basis.
     - Accumulated Liquidity: See the total liquidity accumulated over time.

3. **Choose the Risk Factor Scenario**:
   - Select the risk factor scenario to analyze how different rate changes impact the portfolio:
     - Increasing Rates
     - Decreasing Rates
     - Steady Rates
     - Recovering Rates

4. **Download Events**:
   - Click the **Download Events** button to download a detailed list of events related to your portfolio's performance under the selected analysis type and risk factor scenario. This report will provide insights into the portfolio’s cash flows, income, and liquidity metrics.


## Improvements which should be made to this demo

- **Expand Contract Types**:
  - Add more contract types and 30-year mortgages to the sample portfolios.
  - Extend the interest rate scenarios further into the future to accommodate these additions.

- **Enhanced CSV File Visibility**:
  - Make the full CSV portfolio files directly visible within the demo to facilitate easier access and analysis.

- **Incorporate Non-Market Risk Factors**:
  - Integrate non-market risk factors such as prepayment, default, and deposit/withdrawal transactions available in the ACTUS-webapp server.

- **Simplify Interface**:
  - Improve the user interface to make it more intuitive and user-friendly, thereby reducing the learning curve for new users.

- **Beginner-Friendly Features**:
  - Introduce features or modes tailored for beginners to help them gradually understand the advanced functionalities of the platform.

