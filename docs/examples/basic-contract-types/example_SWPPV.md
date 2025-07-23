# Basic SWPPV Example

## Contract Definition
```python
import pandas as pd
from awesome_actus_lib import SWPPV, PublicActusService, ReferenceIndex

contract = SWPPV(
    contractID="swppv01",
    statusDate="2014-12-30T00:00:00",
    contractRole="PF",
    currency="USD",
    contractDealDate="2014-12-28T00:00:00",
    initialExchangeDate="2015-01-01T00:00:00",
    maturityDate="2015-04-01T00:00:00",
    notionalPrincipal=1000,
    cycleAnchorDateOfInterestPayment="2015-04-01T00:00:00",
    cycleOfInterestPayment="P1ML1",
    nominalInterestRate=0.05,
    nominalInterestRate2=0.08,
    dayCountConvention="A365",
    cycleAnchorDateOfRateReset="2015-01-01T00:00:00",
    rateSpread=0.0,
    marketObjectCodeOfRateReset="USD_Treasury",
    fixingPeriod="P0D",
    deliverySettlement="D",
    creatorID="Creator-01",
    counterpartyID="Counterparty-01"
)
rf_data_USD_Treasury = pd.DataFrame({
    "date": ["2015-01-01"],
    "value": [0.01]
})
rf_USD_Treasury = ReferenceIndex(marketObjectCode="USD_Treasury", source=rf_data_USD_Treasury)
service = PublicActusService()
event_stream = service.generateEvents(portfolio=contract, riskFactors=[rf_USD_Treasury])
print(event_stream.events_df)

```

## Generated Events
| type   | time             |    payoff | currency   |   nominalValue |   nominalRate |   nominalAccrued | contractId   |
|:-------|:-----------------|----------:|:-----------|---------------:|--------------:|-----------------:|:-------------|
| IED    | 2015-01-01T00:00 |   0       | USD        |          -1000 |          0.08 |                0 | swppv01      |
| RR     | 2015-01-01T00:00 |   0       | USD        |          -1000 |          0.01 |                0 | swppv01      |
| IPFX   | 2015-04-01T00:00 | -12.3288  | USD        |          -1000 |          0.01 |                0 | swppv01      |
| IPFL   | 2015-04-01T00:00 |   2.46575 | USD        |          -1000 |          0.01 |                0 | swppv01      |
| MD     | 2015-04-01T00:00 |   0       | USD        |              0 |          0.01 |                0 | swppv01      |
