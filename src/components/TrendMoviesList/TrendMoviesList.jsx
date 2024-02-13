import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getTrendMovies } from "api/api";

import styles from "./trend-movies-list.module.css"



export const TrendMoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
console.log(movies);

    
    useEffect(() => {
        const fetchTrendMovies = async () => {
            try {
                setLoading(true);
                const data  = await getTrendMovies();
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


const elements = movies.map(({ id,original_title }) => (<li key={id} className={styles.item}>
    <Link to={`/movies/${id}`}>{original_title}</Link> 
</li>));

return (
<>
{error && <p className={styles.error}>{error}</p>}
{loading && <p>...Loading</p>}

{elements}
</>
)

}