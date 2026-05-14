import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const steps = [
  {
    id: 'acesso',
    label: 'Como acessar o Sentus',
    to: '/docs/sentus/Acesso#como-acessar-o-sentus',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
      </svg>
    ),
  },
  {
    id: 'cadastros',
    label: 'Cadastros básicos',
    to: '/docs/sentus/cadastro-de-Itens',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
];

function StepCard({ label, to, icon }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <span className={styles.cardLabel}>{label}</span>
      <svg className={styles.cardArrow} width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export default function GettingStarted() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="getting-started-title" className={styles.title}>
            Dando os seus primeiros passos?
          </h2>
        </div>
        <div className={styles.grid}>
          {steps.map((step) => (
            <StepCard key={step.id} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
