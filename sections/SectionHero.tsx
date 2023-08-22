import styles from '@sections/SectionHero.module.scss';

import * as React from 'react';

export default function SectionHero(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <p className={styles.heading}>An investment firm dedicated to the IPFS & Filecoin ecosystem</p>
        <p className={styles.paragraph}>
          We focus on Filecoin & IPFS and related decentralized storage technologies at the frontier. We invest in, build, and contribute to Web3 companies and Filecoin. We often
          get involved at the earliest stages and continue to support our portfolio companies over time.
        </p>
      </div>
    </div>
  );
}
