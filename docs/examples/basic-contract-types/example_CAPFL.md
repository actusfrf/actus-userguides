# Basic CAPFL Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import CAPFL, PublicActusService, ReferenceIndex

contract = CAPFL(
    contractID="capfl01",
    contractRole="BUY",
    contractStructure=[{'object': {'contractType': 'PAM', 'contractID': 'capfl-underlying', 'contractDealDate': '2012-12-28T00:00:00', 'initialExchangeDate': '2013-01-01T00:00:00', 'currency': 'USD', 'statusDate': '2012-12-30T00:00:00', 'notionalPrincipal': '1000', 'dayCountConvention': 'A365', 'nominalInterestRate': '0.05', 'maturityDate': '2014-01-01T00:00:00', 'cycleAnchorDateOfInterestPayment': '2013-04-01T00:00:00', 'cycleOfInterestPayment': 'P3ML1', 'cycleAnchorDateOfRateReset': '2013-04-01T00:00:00', 'cycleOfRateReset': 'P3ML1', 'marketObjectCodeOfRateReset': 'LIBORUSD1M'}, 'referenceType': 'CNT', 'referenceRole': 'UDL'}],
    currency="USD",
    contractDealDate="2012-12-28T00:00:00",
    statusDate="2012-12-30T00:00:00",
    lifeCap=0.07,
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)
rf_data_LIBORUSD1M = pd.DataFrame({
    "date": ["2013-04-01", "2013-07-01", "2013-10-01"],
    "value": [0.1, 0.01, 0.04]
})
rf_LIBORUSD1M = ReferenceIndex(marketObjectCode="LIBORUSD1M", source=rf_data_LIBORUSD1M)
service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[rf_LIBORUSD1M])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |      payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|------------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| IP     | 2013-04-01T00:00 | 0           | USD        |              0 |             0 |                0 | capfl01      |
| IP     | 2013-07-01T00:00 | 7.47945     | USD        |              0 |             0 |                0 | capfl01      |
| IP     | 2013-10-01T00:00 | 1.77636e-15 | USD        |              0 |             0 |                0 | capfl01      |
| IP     | 2014-01-01T00:00 | 0           | USD        |              0 |             0 |                0 | capfl01      |
