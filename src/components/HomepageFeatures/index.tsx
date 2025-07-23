import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quick Intergration',
    description: (
      <>
        The ACTUS Community Edition download and related demo apps make it easy to see 
        how ACTUS can be used to incorporate forward-looking cash flow analysis, 
        risk management or digital asset management capabilities in your 
        financial business.
      </>
    ),
  },
  {
    title: 'Core Features',
    description: (
      <>
        You can focus on the creation and composition of your financial products, 
        use ACTUS to generate detailed future cash flow projections for your 
        product mix using scenarios of your choice, and then feed the forecasted cash flow 
        results into analytics for valuation, liquidity, and risk management—all by simply 
        expressing your contracts using the ACTUS standard.
      </>
    ),
  },
  {
    title: 'Smart Algorithms',
    description: (
      <>
       Extend or customize your contract structures by applying robust ACTUS Algorithmic Contract Types™, 
        which can interact with external behavior observers to reflect your “what-if” scenarios and 
        forecasts while maintaining the integrity of the contract definitions.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
