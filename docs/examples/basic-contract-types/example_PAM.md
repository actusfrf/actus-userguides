# Basic PAM Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import PAM, PublicActusService

contract = PAM(
    contractID="pam01",
    statusDate="2012-12-30T00:00:00",
    contractDealDate="2012-12-28T00:00:00",
    currency="USD",
    notionalPrincipal=3000,
    initialExchangeDate="2013-01-01T00:00:00",
    maturityDate="2014-01-01T00:00:00",
    nominalInterestRate=0.1,
    cycleAnchorDateOfInterestPayment="2013-01-01T00:00:00",
    cycleOfInterestPayment="P1ML0",
    dayCountConvention="30E360",
    endOfMonthConvention="SD",
    premiumDiscountAtIED=0,
    rateMultiplier=1.0,
    contractRole="RPA",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)

service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |   payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|---------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| IED    | 2013-01-01T00:00 |    -3000 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-01-01T00:00 |        0 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-02-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-03-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-04-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-05-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-06-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-07-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-08-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-09-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-10-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-11-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2013-12-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| IP     | 2014-01-01T00:00 |       25 | USD        |           3000 |           0.1 |                0 | pam01        |
| MD     | 2014-01-01T00:00 |     3000 | USD        |              0 |           0.1 |                0 | pam01        |
