import { TrendMoviesList } from "components/TrendMoviesList/TrendMoviesList";

import styles from "./home-page.module.css";

const HomePage = ()=> {
    return (
        <div className={styles.homePage}>
            <h1>Trending Today</h1>
            <TrendMoviesList/>
            
        </div>
    )
}
export default HomePage;
