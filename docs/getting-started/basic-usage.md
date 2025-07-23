# Basic Usage

This guide walks you through defining and simulating a basic ACTUS contract using the `awesome_actus_lib` library.

> 💡 Make sure you've installed the package. If not, see [installation.md](./installation.md) for instructions.

## Example: Fixed Rate PAM Contract

The following script demonstrates how to define a minimal **fixed rate PAM contract** and generate its cash flow events using the public ACTUS simulation service:

```python
from awesome_actus_lib import PAM, PublicActusService

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

# Instantiate the public Actus simulation service
simulationService = PublicActusService()

# Generate events for the contract
event_stream = simulationService.generateEvents(portfolio=pam_contract)

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

Please note that this is a minimal setup for a simulation. Examples for other PAMs, other contract types, or portfolio simulations and analysis can be found under the [Examples](../examples/basic-contract-types/example_PAM.md) section.
