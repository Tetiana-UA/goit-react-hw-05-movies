import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Notiflix from 'notiflix';
import styles from "./reviews.module.css";

import { Loader } from "components/Loader/Loader";
import { getMovieReviewsById } from "api/api";




const Reviews = () => {
  
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const {id}=useParams();

    useEffect (() => {
 
    const addReviews = async () => {
    try{
        setLoading(true);
        const reviewsData =await getMovieReviewsById(id);
    
        if (reviewsData === 0) {
            return Notiflix.Notify.failure('There is no information about reviews for this movie');
        }
    
        setReviews(reviewsData);
        
        
        
        }

    catch (error){
        setError(error.message)
    }

    finally{
        setLoading(false)
    }
    }
  // викликаємо функцію в ній самій
    addReviews()

},[id])






const elements = reviews.map(({id, author, content}) => (
    <li key={id}>
        <h4>{author}</h4>
        <p>{content}</p>
    </li>))

//для подальшої перевірки записуємо в константу, що масив картинок(gallery) не порожній , тобто Boolean(gallery.length) буде true. А якщо буде порожній , тоьто false, і далі в return не будемо відмальовувати компоненти
const isReviews=Boolean(reviews.length)


    return (
    <div className={styles.cast}>
            
        {error && <p>{error}</p>}
        {loading && <Loader/>}
        {isReviews && <ol>{elements}</ol>}
                
    </div>
    
    )
}

export default Reviews;
