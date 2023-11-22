'use client';
import { useEffect, useState } from 'react';

import { cx } from '../../../utils';
import articles from '../(articles)/articles.json';
import { SearchOnDocumentation } from '../Search';
import { ArticleLinksGroup } from './LinksGroup';
import { usePathname } from 'next/navigation';

import styles from './index.module.scss';

export const DocsNavigation = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const onClick = () => {
    setOpen(!open);
  };

  return <aside
    aria-label="Documentation sidebar"
    className={cx(styles.sideNavBar, {
      [styles.open]: open,
    })}
  >
    <div className={styles.actions}>
      <span className={styles.toggleMenu} onClick={onClick}>{'>'} Menu</span>
      <SearchOnDocumentation />
    </div>
    <nav className={styles.nav} aria-label="Readable Types Documentation">
      {
        articles.map(({ articles, title, route }) => {
          return <ArticleLinksGroup key={route} route={route} title={title} articles={articles as any} />;
        })
      }
    </nav>
  </aside>;
};