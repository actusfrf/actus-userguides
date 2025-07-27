# Basic FXOUT Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import FXOUT, PublicActusService

contract = FXOUT(
    contractID="fxout01",
    contractRole="RPA",
    currency="USD",
    currency2="EUR",
    maturityDate="2014-12-31T23:59:59",
    notionalPrincipal=2000,
    notionalPrincipal2=1000,
    calendar="NOCALENDAR",
    endOfMonthConvention="SD",
    statusDate="2013-12-30T00:00:00",
    contractDealDate="2013-12-20T00:00:00",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)

service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[])
print(event_stream.events_df)

```

## Generated Events
| type   | time                |   payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:--------------------|---------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| MD     | 2014-12-31T23:59:59 |     2000 | USD        |              0 |             0 |                0 | fxout01      |
| MD     | 2014-12-31T23:59:59 |    -1000 | EUR        |              0 |             0 |                0 | fxout01      |
