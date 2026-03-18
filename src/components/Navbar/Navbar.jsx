import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>CRUD-IFMG</div>
      <div className={styles.links}>
        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.link}>Home</NavLink>
        <NavLink to="/cadastro" className={({ isActive }) => isActive ? styles.active : styles.link}>Cadastrar</NavLink>
      </div>
    </nav>
  );
};
export default Navbar;