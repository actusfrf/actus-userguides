import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        ACTUS was designed from the ground up to be easily integrated and
        used to get your algorithmic contracts up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        ACTUS lets you focus on your contract definitions, and we&apos;ll handle the underlying algorithms. Go
        ahead and define your contracts using the ACTUS standard.
      </>
    ),
  },
  {
    title: 'Powered by Robust Algorithms',
    description: (
      <>
        Extend or customize your contract structures by reusing robust algorithms. ACTUS can
        be extended while maintaining the integrity of the contract definitions.
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
