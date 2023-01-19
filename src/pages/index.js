import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';

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
        Komiser is the first step in our plan to create the future generation of Developers and DevOps engineers. The future of DevOps can only be built with the understanding of what we actually have in our cloud accounts, and Komiser is here to help with exactly that.
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

function HomepageFeatures() {
  return (
    <div className={clsx('container', styles.features)}>
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <p>What's coming next?</p>
          <p>To stay in the loop, join our Discord and have the product updates regularly delivered to you.</p>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.tailwarden.com">
            Join Discord
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Awe logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/komiser-logo-circle.png')}
            />
            <span className={styles.heroTitleTextHtml}>
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  loop: (<b><Translate>loop</Translate></b>),
                  discord: (<b><Translate>Discord</Translate></b>),
                  productUpdates: (<b><Translate>product updates</Translate></b>),
                  you: (<b><Translate>you</Translate></b>)
              }}>
                {`Stay in the {loop}! Join our {discord} and have the {productUpdates} regularly delivered to {you}.`}
              </Translate>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('docs/overview/introduction/getting-started')}>
              <Translate>Start using Komiser</Translate>
            </Link>
            <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to="https://discord.tailwarden.com">
              <Translate>Join Discord</Translate>
            </Link>
          </div>
        </div>
      </div>
      <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="https://roadmap.tailwarden.com/komiser">
                  <Translate>public roadmap!</Translate>
                </Link>
              ),
            }}>
            {`Interested in what's to come? Check out our {migrationGuideLink}`}
          </Translate>
          .
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



