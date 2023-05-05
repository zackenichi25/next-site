import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navigation.module.css';

const LINKS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
];

type NavAnchor = {
  path: string;
  children: ReactNode;
};

function NavAnchor({ path, children }: NavAnchor) {
  return (
    <Link href={path} legacyBehavior>
      <a className={styles.navAnchor}>{children}</a>
    </Link>
  );
}

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({ name, path }) => (
          <li key={path}>
            {path === pathname ? (
              <span>{name}</span>
            ) : (
              <NavAnchor path={path}>{name}</NavAnchor>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
