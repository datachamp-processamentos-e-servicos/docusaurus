import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CtaBanner() {
  return (
    <section id="get-started" className={styles.ctaBanner}>
      <h2 id="cta-title" className={styles.ctaBannerTitle}>Ainda não encontrou o que procura?</h2>
      <Link
        href='https://wa.me/5434622875'
        className={styles.btnCta}
      >
        Chamar o suporte
      </Link>
    </section>
  );
}
