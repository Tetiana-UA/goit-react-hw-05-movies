import { MovieDetails } from "components/MovieDetails/MovieDetails"
import styles from "./movie-details-page.module.css";

export const MovieDetailsPage = ()=> {
    return (
        <div className={styles.wrapper}>
            
            <MovieDetails/>
            
        </div>
    )
}
