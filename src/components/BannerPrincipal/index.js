import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className={styles.heroGlow} />

      <div className={styles.heroContent}>

        {/* Titulo */}
        <div className={styles.heroTitleWrapper}>
          <img
            src="/docusaurus/img/datachamp_logo.png"
            alt="Datachamp"
            className={styles.heroLogo}
          />
          <h1 id="hero-title" className={styles.heroTitle}>
            Datachamp<span style={{ fontWeight: 400 }}>Docs</span>
          </h1>
        </div>

        {/* Subtitulo */}
        <p className={styles.heroSubtitle}>
          Repositório central de documentação para todos os aplicativos
          Datachamp. Tudo que você precisa, num só lugar.
        </p>

        {/* Botao */}
        <div className={styles.heroActions}>
          <Link
            to="/docs/intro/"
            className={styles.btnPrimary}
          >
            Explorar Documentos
          </Link>
        </div>
      </div>
    </section>
  );
}
