import styles from '@sections/SectionNavigation.module.scss';

import * as React from 'react';

import Logo from '@components/Logo';

export default function SectionNavigation(props) {
  return (
    <div className={styles.section}>
      <div className={styles.body}>
        <div className={styles.left}>
          <h1 className={styles.heading}>PRINCIPLE & DELEGATION</h1>
          <p className={styles.paragraph}>A Protocol Labs Network Company</p>
        </div>

        <div className={styles.right}>
          <Logo height="64px" href="/" />
        </div>
      </div>
    </div>
  );
}
