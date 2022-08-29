import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Installations',
    description: (
      <>
        Komiser was designed to be light-weight and easily installed so 
        you can  start getting cloud insights as quickly as possible.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Komiser enables you to have a clear view into your cloud account, gives helpful advice to reduce the cost and secure your environment.
      </>
    ),
  },
  {
    title: 'The Future of DevOps',
    description: (
      <>
        Komiser is the first step in our plan to create the future generation of Developers and DevOps engineers. The future of DevOps can only be built with the understanding of what we actually have in our cloud accounts, and Komiser is here to help with exactly that.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
