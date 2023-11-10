import { PropsWithChildren } from 'react';

import { ArticleLinksGroup } from './(articles)/Article';
import articles from './(articles)/articles.json';

import styles from './layout.module.css';

export default async ({ children }: PropsWithChildren) => {
  return <>
    <aside className={styles.sideNavBar} aria-label="Documentation sidebar">
      <nav aria-label="Readable Types Documentation">
        {
          articles.map(({ articles, title, route }) => {
            return <ArticleLinksGroup key={route} route={route} title={title} articles={articles} />;
          })
        }
      </nav>
    </aside>
    <main className={styles.content} aria-labelledby="main-content-heading">
      {children}
    </main>
  </>;
};