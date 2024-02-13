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
        <>
            {loading && <p>...Loading</p>}
            {error && <p className={styles.error}>Error: {error}</p>}
            
            <button onClick={goBack} type="button">Go back</button>
			
            {movieData && (
                <div className={styles.wrapper}>
                <div>
                    <div>
                <img src={ movieData.poster_path ?
                    `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : defaultImg}             
                    width={250}
                    alt="poster"
                />
</div>
<div>
				<h1>{movieData.title}</h1>
                <p>Popularity:{movieData.popularity}</p>
                <h2>Overviews:{movieData.overview}</h2>
                
                </div>
                </div>
                <div>
                    <Link to="cast">Cast</Link>
                    <Outlet/>
                </div>
                </div>
			)}
        
        </>
    )
}