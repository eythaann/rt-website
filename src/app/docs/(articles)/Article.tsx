'use client';
import { cx } from '../../../utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './navigation.module.css';

interface group {
  title: string;
  route: string;
  articles: Array<group | article>;
}

interface article {
  title: string;
  route: string;
  active: boolean;
}

export const ArticleLinksGroup = ({ title, route, articles }: group) => {
  const detailsId = `details-${route.replace(/\//g, '-')}`;
  const pathname = usePathname();

  console.log(pathname);

  return <details open={pathname.includes(route)}>
    <summary aria-controls={detailsId}>{title}</summary>
    <ul id={detailsId}>
      {
        articles.map((article) => {
          return <LinkToArticle
            active={pathname.includes(article.route)}
            key={article.route}
            route={route + '/' + article.route}
            title={article.title}
          />;
        })
      }
    </ul>
  </details>;
};

export const LinkToArticle = ({ title, route, active }: article) => {
  return <li className={cx(styles.link, {
    [styles.active]: active,
  })}>
    <Link href={`/docs/${route}`}>{title}</Link>
  </li>;
};