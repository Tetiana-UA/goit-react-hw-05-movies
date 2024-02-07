import { NavLink } from "react-router-dom";
import  styles  from "./main-menu.module.css";

export const MainMenu = () =>
{
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink className={styles.navLink} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={styles.navLink} to="/movies">Movies</NavLink>
            </li>
        </ul>
    )
}