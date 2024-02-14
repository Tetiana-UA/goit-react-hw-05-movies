import styles from "./movies-page.module.css";
import { MoviesSearch } from "components/MoviesSearch/MoviesSearch";



export const MoviesPage = ()=> {
    return (
        <div className={styles.wrapper}>
                        
            <MoviesSearch/>  
            
        </div>
    )
}