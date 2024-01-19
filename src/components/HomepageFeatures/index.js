import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';


const FeatureList = [
  {
    title: 'Ecosystem',
    Svg: ThemedImage,
    sources: {
      light: 'https://mnstrd.co/wiki/ecosystem.svg',
      dark: 'https://mnstrd.co/wiki/ecosystem.svg',
    },
    description: (
      <>
        Our ecosystem & instruments
      </>
    ),
    url: '/docs/category/ecosystem',
  },
  {
    title: 'Developers',
    Svg: ThemedImage,
    sources: {
      light: 'https://mnstrd.co/wiki/developers.svg',
      dark: 'https://mnstrd.co/wiki/developers.svg',
    },
    description: (
      <>
       Developers
      </>
    ),
    url: '/docs/category/developers',
  },
  {
    title: 'Tokenomics',
    Svg: ThemedImage,
    sources: {
      light: 'https://mnstrd.co/wiki/tokenomics.svg',
      dark: 'https://mnstrd.co/wiki/tokenomics.svg',
    },
    description: (
      <>
        Tokenomics
      </>
    ),
    url: '/docs/category/tokenomics',
  },




];

function Feature({Svg, title, description, url, sources}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}><Svg className={styles.featureSvg} alt={title} sources={sources} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
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
