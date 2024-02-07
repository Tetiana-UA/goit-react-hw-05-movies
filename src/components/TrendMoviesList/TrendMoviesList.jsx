import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrendMovies } from "api/api";

import styles from "./trend-movies-list.module.css"



export const TrendMoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const fetchTrendMovies = async () => {
            try {
                setLoading(true);
                const { data } = await getTrendMovies();
                setMovies(data?.length ? data : []);
                console.log(data);
                
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchTrendMovies();
    }, []);

    
console.log(movies);


const elements = movies.map(({ id, poster_path, original_title }) => (<li key={id} className={styles.item}>
    <h3>{original_title}</h3> 
</li>));

return (
<>
{error && <p className={styles.error}>{error}</p>}
{loading && <p>...Loading</p>}

{elements}
</>
)

}