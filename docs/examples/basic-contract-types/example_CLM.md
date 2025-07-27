# Basic CLM Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import CLM, PublicActusService

contract = CLM(
    contractID="clm01",
    statusDate="2015-08-20T00:00:00",
    contractRole="RPA",
    calendar="NC",
    endOfMonthConvention="SD",
    cycleOfInterestPayment="P1ML1",
    nominalInterestRate=0.12,
    dayCountConvention="AA",
    currency="CHF",
    contractDealDate="2015-07-18T00:00:00",
    initialExchangeDate="2015-08-20T00:00:00",
    maturityDate="2015-09-20T00:00:00",
    notionalPrincipal=1000,
    xDayNotice="P1M",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)

service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |    payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|----------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| IP     | 2015-09-20T00:00 |   10.1918 | CHF        |           1000 |          0.12 |                0 | clm01        |
| MD     | 2015-09-20T00:00 | 1000      | CHF        |              0 |          0.12 |                0 | clm01        |
