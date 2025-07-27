# Configuration

You can manually configure the `ActusService` and `RiskService` to connect to your own hosted services. This is especially important in production environments, since the public services are intended **only for demonstration and testing purposes**.

## Actus Service Configuration

The `ActusService` is responsible for simulating ACTUS financial contracts. You can configure it to connect to either a **remote ACTUS server** or a **local Docker instance**.

Below is an example showing how to configure both options and simulate a fixed-rate PAM contract.

```python
from awesome_actus_lib import PAM, ActusService

# Minimal fixed rate PAM contract
pam_contract = PAM(
    calendar="NOCALENDAR",
    businessDayConvention="SCF",
    statusDate="2025-01-01",
    contractRole="RPA",
    contractID="PAM-001",
    counterpartyID="CP01",
    creatorID="creator01",
    cycleAnchorDateOfInterestPayment="2025-01-02",
    cycleOfInterestPayment="P1YL1",
    nominalInterestRate=0.03,
    dayCountConvention="30E360",
    currency="USD",
    contractDealDate="2025-01-01",
    initialExchangeDate="2025-01-02",
    maturityDate="2030-01-01",
    notionalPrincipal=10000.0,
    premiumDiscountAtIED=0
)

# Configure ActusService with a custom URL (e.g., your own ACTUS Service)
remote_url = "https://dadfir3-app.zhaw.ch/"
actus_service_remote = ActusService(serverURL=remote_url)

# It is also possible to use a local Docker service if you have it set up.
local_url = "http://localhost:8083"
actus_service_local = ActusService(serverURL=local_url)

# Generate events using the local or remote service
event_stream = actus_service_remote.generateEvents(portfolio=pam_contract)

# Print the resulting events DataFrame
print(event_stream.events_df)
```
## Output

Running the above script will print a pandas DataFrame containing the scheduled contract events (e.g., interest payments, maturity).

```text
  type              time        payoff currency  nominalValue  nominalRate  nominalAccrued contractId
0  IED  2025-01-02T00:00 -10000.000000      USD       10000.0         0.03             0.0    PAM-001
1   IP  2025-01-02T00:00      0.000000      USD       10000.0         0.03             0.0    PAM-001
2   IP  2026-01-02T00:00    300.000000      USD       10000.0         0.03             0.0    PAM-001
3   IP  2027-01-02T00:00    300.000000      USD       10000.0         0.03             0.0    PAM-001
4   IP  2028-01-02T00:00    300.000000      USD       10000.0         0.03             0.0    PAM-001
5   IP  2029-01-02T00:00    300.000000      USD       10000.0         0.03             0.0    PAM-001
6   IP  2030-01-01T00:00    299.166667      USD       10000.0         0.03             0.0    PAM-001
7   MD  2030-01-01T00:00  10000.000000      USD           0.0         0.03             0.0    PAM-001
```

## Risk Service Configuration

Actus used to accept risk factors directly within a simulation request. However, recent developments in the ACTUS open-source community have separated the risk service from the simulation logic. This reflects the strict methodological separation between **contract simulation** and **market scenario configuration**.

With this new structure, you first populate a **RiskService** with market data (e.g., interest rate curves) and then submit contracts to the **ActusService**. The simulation engine automatically fetches the correct risk factors from the configured risk service.

This section shows how to configure both services and run a simulation based on uploaded risk factors.


### Full Example including configuration of a RiskService

```python
import pandas as pd
from awesome_actus_lib import PAM, ActusService, RiskService, ReferenceIndex

# Create a minimal variable rate PAM contract
pam_contract = PAM(
    calendar="NOCALENDAR",
    businessDayConvention="SCF",
    statusDate="2025-01-01",
    contractRole="RPA",
    contractID="PAM-002",
    counterpartyID="CP01",
    creatorID="creator01",
    cycleAnchorDateOfInterestPayment="2025-01-02",
    cycleOfInterestPayment="P1YL1",
    nominalInterestRate=0.02,  # base rate
    dayCountConvention="30E360",
    currency="USD",
    contractDealDate="2025-01-01",
    initialExchangeDate="2025-01-02",
    maturityDate="2030-01-01",
    notionalPrincipal=10000.0,
    premiumDiscountAtIED=0,
    cycleAnchorDateOfRateReset="2025-01-02",
    cycleOfRateReset="P1YL1",
    marketObjectCodeOfRateReset="ust5Y",
    rateSpread=0.005
)

# Create rate curve data as a DataFrame
rf_data = pd.DataFrame({
    "date": ["2025-01-01", "2026-01-01", "2027-01-01", "2028-01-01", "2029-01-01", "2030-01-01"],
    "value": [0.02, 0.021, 0.022, 0.023, 0.024, 0.025]
})

# Wrap it in a ReferenceIndex
reference_index = ReferenceIndex(
    marketObjectCode="ust5Y",
    source=rf_data,
    base=1
)

# Connect to external RiskService
risk_service_url = "https://dadfir3-riskservice.zhaw.ch/"
risk_service = RiskService(serverURL=risk_service_url)

# Upload the curve to the risk service
risk_service.upload_reference_index(reference_index, riskFactorID="ust5Y")

# Create a scenario using the uploaded curve
risk_service.create_scenario(
    scenarioID="scenario1",
    riskFactorDescriptors=[{"riskFactorID": "ust5Y", "riskFactorType": "ReferenceIndex"}]
)

# Connect ActusService with externalRiskService enabled
actus_service = ActusService(
    serverURL="https://dadfir3-app.zhaw.ch/",
    externalRiskService=True
)

# Simulate contract with external risk factors
event_stream = actus_service.generateEventsWithExternalRisk(
    portfolio=pam_contract,
    scenarioID="scenario1",
    riskService=risk_service
)

# Print event stream
print("ReferenceIndex added Successfully\n")
print(event_stream.events_df)
```
## Output

Running the above script will print a pandas DataFrame containing the scheduled contract events (e.g., interest payments, maturity).

```text
ReferenceIndex added Successfully

<Response [200]>
   type              time        payoff currency  nominalValue  nominalRate  nominalAccrued contractId
0   IED  2025-01-02T00:00 -10000.000000      USD       10000.0        0.020             0.0    PAM-002
1    IP  2025-01-02T00:00      0.000000      USD       10000.0        0.020             0.0    PAM-002
2    RR  2025-01-02T00:00      0.000000      USD       10000.0        0.025             0.0    PAM-002
3    IP  2026-01-02T00:00    250.000000      USD       10000.0        0.025             0.0    PAM-002
4    RR  2026-01-02T00:00      0.000000      USD       10000.0        0.026             0.0    PAM-002
5    IP  2027-01-02T00:00    260.000000      USD       10000.0        0.026             0.0    PAM-002
6    RR  2027-01-02T00:00      0.000000      USD       10000.0        0.027             0.0    PAM-002
7    IP  2028-01-02T00:00    270.000000      USD       10000.0        0.027             0.0    PAM-002
8    RR  2028-01-02T00:00      0.000000      USD       10000.0        0.028             0.0    PAM-002
9    IP  2029-01-02T00:00    280.000000      USD       10000.0        0.028             0.0    PAM-002
10   RR  2029-01-02T00:00      0.000000      USD       10000.0        0.029             0.0    PAM-002
11   IP  2030-01-01T00:00    289.194444      USD       10000.0        0.029             0.0    PAM-002
12   MD  2030-01-01T00:00  10000.000000      USD           0.0        0.029             0.0    PAM-002
```
