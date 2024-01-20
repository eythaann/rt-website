import { RecommendedLinks, RecommendedLinksObj } from './constants';
import Link from 'next/link';

import styles from './index.module.scss';

interface Props {
  links: RecommendedLinks[];
}

export const ArticleRecommendations = ({ links }: Props) => {
  return <nav className={styles.container}>
    <ul>
      {
        links.map((route, index) => {
          const link = RecommendedLinksObj[route];
          return <li key={index}>
            <Link href={link.route} className={styles.box}>
              <span className={styles.title}>{link.title}</span>
              <span className={styles.description}>{link.description}</span>
            </Link>
          </li>;
        })
      }
    </ul>
  </nav>;
};