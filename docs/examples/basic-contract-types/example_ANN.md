# Basic ANN Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import ANN, PublicActusService

contract = ANN(
    contractID="ann01",
    contractRole="RPA",
    contractDealDate="2012-12-28T00:00:00",
    initialExchangeDate="2013-01-01T00:00:00",
    statusDate="2012-12-30T00:00:00",
    notionalPrincipal=5000,
    cycleAnchorDateOfPrincipalRedemption="2013-02-01T00:00:00",
    nextPrincipalRedemptionPayment=434.866594118346,
    dayCountConvention="A365",
    nominalInterestRate=0.08,
    currency="USD",
    cycleOfPrincipalRedemption="P1ML0",
    maturityDate="2014-01-01T00:00:00",
    rateMultiplier=1.0,
    rateSpread=0.0,
    fixingDays="P0D",
    cycleAnchorDateOfInterestPayment="2013-02-01T00:00:00",
    cycleOfInterestPayment="P1ML0",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)

service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |      payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|------------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| IED    | 2013-01-01T00:00 | -5000       | USD        |       5000     |          0.08 |          0       | ann01        |
| PR     | 2013-02-01T00:00 |   400.894   | USD        |       4599.11  |          0.08 |         33.9726  | ann01        |
| IP     | 2013-02-01T00:00 |    33.9726  | USD        |       4599.11  |          0.08 |          0       | ann01        |
| PR     | 2013-03-01T00:00 |   406.642   | USD        |       4192.46  |          0.08 |         28.2247  | ann01        |
| IP     | 2013-03-01T00:00 |    28.2247  | USD        |       4192.46  |          0.08 |          0       | ann01        |
| PR     | 2013-04-01T00:00 |   406.381   | USD        |       3786.08  |          0.08 |         28.4858  | ann01        |
| IP     | 2013-04-01T00:00 |    28.4858  | USD        |       3786.08  |          0.08 |          0       | ann01        |
| PR     | 2013-05-01T00:00 |   409.972   | USD        |       3376.11  |          0.08 |         24.8948  | ann01        |
| IP     | 2013-05-01T00:00 |    24.8948  | USD        |       3376.11  |          0.08 |          0       | ann01        |
| PR     | 2013-06-01T00:00 |   411.928   | USD        |       2964.18  |          0.08 |         22.9391  | ann01        |
| IP     | 2013-06-01T00:00 |    22.9391  | USD        |       2964.18  |          0.08 |          0       | ann01        |
| PR     | 2013-07-01T00:00 |   415.376   | USD        |       2548.81  |          0.08 |         19.4905  | ann01        |
| IP     | 2013-07-01T00:00 |    19.4905  | USD        |       2548.81  |          0.08 |          0       | ann01        |
| PR     | 2013-08-01T00:00 |   417.549   | USD        |       2131.26  |          0.08 |         17.3179  | ann01        |
| IP     | 2013-08-01T00:00 |    17.3179  | USD        |       2131.26  |          0.08 |          0       | ann01        |
| PR     | 2013-09-01T00:00 |   420.386   | USD        |       1710.87  |          0.08 |         14.4809  | ann01        |
| IP     | 2013-09-01T00:00 |    14.4809  | USD        |       1710.87  |          0.08 |          0       | ann01        |
| PR     | 2013-10-01T00:00 |   423.617   | USD        |       1287.26  |          0.08 |         11.2496  | ann01        |
| IP     | 2013-10-01T00:00 |    11.2496  | USD        |       1287.26  |          0.08 |          0       | ann01        |
| PR     | 2013-11-01T00:00 |   426.12    | USD        |        861.136 |          0.08 |          8.74629 | ann01        |
| IP     | 2013-11-01T00:00 |     8.74629 | USD        |        861.136 |          0.08 |          0       | ann01        |
| PR     | 2013-12-01T00:00 |   429.204   | USD        |        431.932 |          0.08 |          5.66227 | ann01        |
| IP     | 2013-12-01T00:00 |     5.66227 | USD        |        431.932 |          0.08 |          0       | ann01        |
| IP     | 2014-01-01T00:00 |     2.93477 | USD        |        431.932 |          0.08 |          0       | ann01        |
| MD     | 2014-01-01T00:00 |   431.932   | USD        |          0     |          0.08 |          0       | ann01        |
