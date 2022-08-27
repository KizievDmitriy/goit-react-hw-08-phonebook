import { NavLink } from 'react-router-dom';
//Local import
import styles from './AuthNav.module.scss';

const itemsNav = [
  { href: 'register', title: 'Register' },
  { href: 'login', title: 'Login' },
];

export const AuthNav = () => {
  return (
    <div className={styles.container}>
      {itemsNav.map(({ href, title }) => (
        <NavLink
          to={href}
          key={href}
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
          }
        >
          {title}
        </NavLink>
      ))}
    </div>
  );
};
