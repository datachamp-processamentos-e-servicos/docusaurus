import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section id="docs" className={styles.features}>
      <h2 id="features-title" className={styles.featuresTitle}>
        Procurando por um App específico?
      </h2>
      <div className={styles.appsGrid}>
        <Link to="/docs/category/sentus" className={styles.appCard}>
          <img
            src="/docusaurus/img/sentus.png"
            alt="Sentus"
            className={styles.appImage}
          />
        </Link>
      </div>
    </section>
  );
}
