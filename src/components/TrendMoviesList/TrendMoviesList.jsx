import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { getTrendMovies } from "api/api";

import styles from "./trend-movies-list.module.css";
import { Loader } from "components/Loader/Loader";




export const TrendMoviesList = () => {
    const [trendMovies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const location = useLocation();
    
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

    



const elements = trendMovies.map(({ id,original_title }) => (<li key={id} className={styles.item}>
    <Link to={`/movies/${id}`} state={{from:location}}>{original_title}</Link> 
</li>));

return (
<>
{error && <p className={styles.error}>{error}</p>}
{loading && <Loader/>}

{elements}
</>
)

}