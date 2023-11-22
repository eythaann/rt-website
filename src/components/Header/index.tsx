import { HeaderRoute } from './route';
import Link from 'next/link';

import styles from './index.module.css';

export const Header = () => {
  return <header role="banner" className={styles.header}>
    <Link href="/" aria-label="Homepage">
      Readable Types
    </Link>
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <ul>
        <HeaderRoute route="docs" label="Documentation Page" />
        <HeaderRoute route="blog" label="Blog Page" />
        <li>
          <a
            href="https://github.com/eythaann/readable-types"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Readable Types on GitHub"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  </header>;
};