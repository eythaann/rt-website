'use client';
import { cx } from '../../../utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './LinksGroup.module.scss';

interface group {
  title: string;
  route: string;
  articles: Array<article>;
}

interface article {
  title: string;
  route: string;
  active: boolean;
  main?: boolean;
}

export const ArticleLinksGroup = ({ title, route, articles }: group) => {
  const detailsId = `details-${route.replace(/\//g, '-')}`;
  const pathname = usePathname();

  return <details open className={styles.group}>
    <summary aria-controls={detailsId}>{title}</summary>
    <ul id={detailsId}>
      {
        articles.map((article) => {
          return <LinkToArticle
            active={article.main ? pathname === '/docs' : pathname.includes(article.route)}
            key={article.route}
            route={route + '/' + article.route}
            title={article.title}
            main={article.main}
          />;
        })
      }
    </ul>
  </details>;
};

export const LinkToArticle = ({ title, route, active, main }: article) => {
  return <li className={cx(styles.link, {
    [styles.active]: active,
  })}>
    <Link href={main ? '/docs' : `/docs/${route}`}>{title}</Link>
  </li>;
};