import { PropsWithChildren } from 'react';

import { DocsNavigation } from './Navigation';

import styles from './layout.module.scss';

export default async ({ children }: PropsWithChildren) => {
  return <>
    <DocsNavigation/>
    <main className={styles.content} aria-labelledby="main-content-heading">
      {children}
    </main>
  </>;
};