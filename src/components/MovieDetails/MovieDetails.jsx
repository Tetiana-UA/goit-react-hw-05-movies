import { useState, useEffect } from "react";
import {Link, Outlet, useParams, useNavigate } from "react-router-dom";

import { getMovieById } from "api/api";


 import styles from "./movie-details.module.css";


export const MovieDetails = () => {
    const [movieData, setMovie] = useState();
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
        
    }, [id]);

    console.log(movieData);

    const goBack = () => navigate(-1);
    const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

    return (
        <div >
            {loading && <p>...Loading</p>}
            {error && <p className={styles.error}>Error: {error}</p>}
            
            <button onClick={goBack} type="button" className={styles.button}>Go back</button>
			
            {movieData && (
                <div className={styles.wrapper}>
                <div className={styles.movieDetails}>
                <div className={styles.picture}>
                <img src={ movieData.poster_path ?
                    `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : defaultImg}             
                    width={250}
                    alt="poster"
                />
                </div>
                <div className={styles.information} >
                {movieData && (
                    <h2 className={styles.title}>{movieData.title}</h2> 
                )}
                {movieData.vote_average > 0 && (
                <p>User Score: {movieData.vote_average}%</p>
                )}
                {movieData.overview && (
                <>
                <h2>Overview</h2>
                <p>{movieData.overview}</p>
                </>
                )}
                {movieData.genres && (
                <>
                <h2>Genres</h2>
                <ul>
                    {movieData.genres.map(({id, name}) => (
                    <li key={id}>{name}</li>
                    ))}
                </ul>
                </>
                )}
 
                </div>
                </div>
                <div >
                    <h3>Additional information</h3>
                    <ul className={styles.additionalLink}>
                    <Link to="cast">Cast</Link>
                    <Link to="reviews">Reviews</Link>
                    </ul>
                    <Outlet/>
                </div>
                </div>
			)}
        
        </div>
    )
}