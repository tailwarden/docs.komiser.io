import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';

const FeatureList = [
  {
    title: 'Easy Installations',
    description: (
      <>
        Komiser was designed to be light-weight and easily installed so 
        you can  start getting cloud insights as quickly as possible.
      </>
    ),
    imageUrl: 'img/easy-installations.png'
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Komiser enables you to have a clear view into your cloud account, gives helpful advice to reduce the cost and secure your environment.
      </>
    ),
    imageUrl: 'img/focus-on-what-matters.png'
  },
  {
    title: 'The Future of DevOps',
    description: (
      <>
       The future of DevOps starts with knowing exactly what we have in our cloud accounts, and Komiser can you help discover every last one of your resources.
      </>
    ),
    imageUrl: 'img/devops-future.png'
  },
];

function Feature({imageUrl, title, description, video}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
     )}
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;
  return (
    <Layout title={tagline} description={customFields.description}>
       <div className={styles.hero}>
       <div className={styles.heroInner}>
            <ThemedImage
              alt="Komiser logo"
              className={styles.heroLogo}
              sources={{
                light: useBaseUrl('/img/komiser-logo-light-mode.png'),
                dark: useBaseUrl('/img/komiser-dark-mode.png'),
              }}
            />
            <h1 className={styles.heroProjectTagline}>Stay in the loop! </h1>
            <p>Join our discord and have <br /> the product updates regularly delivered to you</p>

          <div className={styles.indexCtas}>
          <Link className={styles.indexTryMeButton} to="https://discord.tailwarden.com">
              <Translate>Join Discord</Translate>
            </Link>
            <Link className={clsx('margin-left--md', styles.indexCtasGetStartedButton)} to={useBaseUrl('docs/introduction/getting-started')}>
              <Translate>Start using Komiser</Translate>
            </Link>
          </div>
        </div>
      </div>
      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="https://roadmap.tailwarden.com/komiser" style={{color: 'white'}}>
                  <Translate>public roadmap!</Translate>
                </Link>
              ),
            }}>
            {`Interested in what's to come? Check out our {migrationGuideLink}`}
          </Translate>
        </div>
      </div>
      <main>
        {FeatureList && FeatureList.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
