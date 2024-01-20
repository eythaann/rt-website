'use client';
import { cx, firstToUpperCase } from '../../utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './index.module.scss';

export const HeaderRoute = ({ route, label }: { route: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(route);

  return <li className={cx({
    [styles.active]: isActive,
  })}>
    <Link href={'/' + route} aria-current={isActive ? 'page' : undefined} aria-label={label}>
      {firstToUpperCase(route)}
    </Link>
  </li>;
};