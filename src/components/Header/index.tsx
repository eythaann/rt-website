import Link from 'next/link';

import styles from './index.module.css';

export const Header = () => {
  return <header role="banner" className={styles.header}>
    <h1>
      <Link href="/">
        Readable Types
      </Link>
    </h1>
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <ul>
        <li>
          <Link href="/docs" /* aria-current={pathname === "/docs" ? "page" : undefined} */>
            Docs
          </Link>
        </li>
        <li>
          <Link href="/blog" /* aria-current={pathname === "/blog" ? "page" : undefined} */>
            Blog
          </Link>
        </li>
        <li>
          <a href="https://github.com/eythaann/readable-types" rel="noopener noreferrer" target="_blank">Github</a>
        </li>
      </ul>
    </nav>
  </header>;
};