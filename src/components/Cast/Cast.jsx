import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Notiflix from 'notiflix';
import styles from "./cast.module.css";

import { Loader } from "components/Loader/Loader";
import { getMovieCastById } from "api/api";




export const Cast = () => {
  
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const {id}=useParams();

    useEffect (() => {
 
    const addCast = async () => {
    try{
        setLoading(true);
        const data =await getMovieCastById(id);
    
        if (data === 0) {
            return Notiflix.Notify.failure('There are no information about cast for this movie');
        }
    
        setCast(data);
        
        }

    catch (error){
        setError(error.message)
    }

    finally{
        setLoading(false)
    }
    }
  // викликаємо функцію в ній самій
    addCast()
},[id])
console.log(cast);

const elements = cast.map(({ id,original_title }) => (<li key={id} className={styles.item}>
     
</li>));

  //для подальшої перевірки записуємо в константу, що масив картинок(gallery) не порожній , тобто Boolean(gallery.length) буде true. А якщо буде порожній , тоьто false, і далі в return не будемо відмальовувати компоненти
  const isCast=Boolean(cast.length)
  

    return (
    <div className={styles.cast}>
            
        {error && <p>{error}</p>}
        {loading && <Loader/>}
        {isCast && <ol>{elements}</ol>}
                
    </div>
    
    )
  }
