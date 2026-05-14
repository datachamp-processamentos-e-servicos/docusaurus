import React, { useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CtaBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.40 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="get-started" ref={ref} className={styles.ctaBanner}>
      <div className={`${styles.header} ${visible ? styles.headerVisible : ''}`}>
        <h2 className={styles.ctaBannerTitle}>Ainda não encontrou o que procura?</h2>
      </div>
      <div
        className={`${styles.cardWrapper} ${visible ? styles.cardWrapperVisible : ''}`}
        style={{ transitionDelay: visible ? '0.40s' : '0s' }}
      >
        <Link
          href='https://wa.me/5434622875'
          className={styles.btnCta}
        >
          Chamar o suporte
        </Link>
      </div>
    </section>
  );
}
