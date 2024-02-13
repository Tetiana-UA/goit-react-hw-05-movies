import { useState, useEffect } from "react";
import { Link, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";

import { getMovieById } from "api/api";

 import styles from "./movie-details.module.css";


export const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const { id } = useParams();

    const navigate=useNavigate();
    
    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                setLoading(true);
                const  data  = await getMovieById(id);
                setMovie(data);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }

        fetchMovieById();
        
        console.log(movie);
        
     // Тут потрібно id????   
    }, []);

    console.log(movie);

    const goBack = () => navigate(-1);

    return (
        <>
            {loading && <p>...Loading</p>}
            {error && <p className={styles.error}>Error: {error}</p>}
            
            <button onClick={goBack} type="button">Go back</button>
			
            {movie && (
                <div>
                <img src={movie.poster_path}
                alt={movie.title}
                width="280"
            />
				<h1>{movie.title}</h1>
                </div>
			)}
        
        </>
    )
}