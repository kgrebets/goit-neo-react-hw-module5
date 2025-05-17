import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  return (
    <ul className={styles.container}>
      <li>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
