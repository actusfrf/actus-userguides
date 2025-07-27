# Basic SWAPS Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import SWAPS, PublicActusService

contract = SWAPS(
    contractID="swaps01",
    contractRole="RFL",
    contractStructure=[{'object': {'contractType': 'PAM', 'contractID': 'swaps01-leg1', 'contractDealDate': '2012-12-28T00:00:00', 'initialExchangeDate': '2013-01-01T00:00:00', 'currency': 'USD', 'statusDate': '2012-12-30T00:00:00', 'notionalPrincipal': '1000', 'dayCountConvention': 'A365', 'nominalInterestRate': '0.1', 'maturityDate': '2014-01-01T00:00:00', 'cycleAnchorDateOfInterestPayment': '2013-01-01T00:00:00', 'cycleOfInterestPayment': 'P1ML1', 'premiumDiscountAtIED': '0'}, 'referenceType': 'CNT', 'referenceRole': 'FIL'}, {'object': {'contractType': 'PAM', 'contractID': 'swaps01-leg2', 'contractDealDate': '2012-12-28T00:00:00', 'initialExchangeDate': '2013-01-01T00:00:00', 'currency': 'USD', 'statusDate': '2012-12-30T00:00:00', 'notionalPrincipal': '1200', 'dayCountConvention': 'A365', 'nominalInterestRate': '0.1', 'maturityDate': '2014-01-01T00:00:00', 'cycleAnchorDateOfInterestPayment': '2013-01-01T00:00:00', 'cycleOfInterestPayment': 'P3ML1', 'premiumDiscountAtIED': '0'}, 'referenceType': 'CNT', 'referenceRole': 'SEL'}],
    currency="USD",
    contractDealDate="2012-12-28T00:00:00",
    statusDate="2012-12-30T00:00:00",
    deliverySettlement="D",
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
| IED    | 2013-01-01T00:00 | -1000       | USD        |           1000 |           0.1 |                0 | swaps01      |
| IED    | 2013-01-01T00:00 |  1200       | USD        |          -1200 |           0.1 |                0 | swaps01      |
| IP     | 2013-01-01T00:00 |     0       | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-01-01T00:00 |     0       | USD        |          -1200 |           0.1 |                0 | swaps01      |
| IP     | 2013-02-01T00:00 |     8.49315 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-03-01T00:00 |     7.67123 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-04-01T00:00 |     8.49315 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-04-01T00:00 |   -29.589   | USD        |          -1200 |           0.1 |                0 | swaps01      |
| IP     | 2013-05-01T00:00 |     8.21918 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-06-01T00:00 |     8.49315 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-07-01T00:00 |     8.21918 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-07-01T00:00 |   -29.9178  | USD        |          -1200 |           0.1 |                0 | swaps01      |
| IP     | 2013-08-01T00:00 |     8.49315 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-09-01T00:00 |     8.49315 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-10-01T00:00 |     8.21918 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-10-01T00:00 |   -30.2466  | USD        |          -1200 |           0.1 |                0 | swaps01      |
| IP     | 2013-11-01T00:00 |     8.49315 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2013-12-01T00:00 |     8.21918 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2014-01-01T00:00 |     8.49315 | USD        |           1000 |           0.1 |                0 | swaps01      |
| IP     | 2014-01-01T00:00 |   -30.2466  | USD        |          -1200 |           0.1 |                0 | swaps01      |
| MD     | 2014-01-01T00:00 |  1000       | USD        |              0 |           0.1 |                0 | swaps01      |
| MD     | 2014-01-01T00:00 | -1200       | USD        |              0 |           0.1 |                0 | swaps01      |
