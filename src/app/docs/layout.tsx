import { PropsWithChildren } from 'react';

import { Group } from './(articles)/Article';
import articles from './(articles)/articles.json';

import styles from './layout.module.css';

export default async ({ children }: PropsWithChildren) => {
  return <div className={styles.documentation}>
    <aside className={styles.sideNavBar}>
      Readable Types
      {
        articles.map(({ articles, title, route }) => {
          return <Group key={route} route={route} title={title} articles={articles} />;
        })
      }
    </aside>
    <main>
      {children}
    </main>
  </div>;
};