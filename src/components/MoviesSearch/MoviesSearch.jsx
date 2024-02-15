import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import Notiflix from 'notiflix';


import styles from "./movies-search.module.css";

import { SearchForm } from "components/Searchform/Searchform";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";

import { getMoviesByQuery } from "api/api";




export const MoviesSearch = () => {
  
    //const [search, setSearch] = useState("");
    const [moviesGallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //const [page, setPage] = useState(1);
    const [btnLoadMore, setLoadMore] = useState(false);

    const[searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");
    const page = searchParams.get("page");

    const location=useLocation();
  
    useEffect (() => {
//Отримуємо список фільмів, який  приходить в результаті запиту на REST API і додаємо в state 
  const addMoviesList = async () => {
    try{
        setLoading(true);
        // (data) приходить в результаті запиту на REST API (сама функція запиту описана в файлі api)
        const data =await getMoviesByQuery(search, page);
    
        if (data === 0) {
            return Notiflix.Notify.failure('There are no images matching your search query. Please try again');
        }
      //Якщо приходить масив фільмів, і він не пустий, то додаємо його, інакше залишаємо масив prevMoviesGallery (тобто gallery, яка була у state до того)
        setGallery(prevMoviesGallery => data.length ? [...prevMoviesGallery,...data] : prevMoviesGallery)
        

      //Перевірка, чи не закінчилися картинки для відображення кнопки Load More
    const perPage = 20;
        const totalPage = Math.ceil(data / perPage);
        if (totalPage > page) {
            setLoadMore(true);
        } else {
            setLoadMore(false);
        }
    }

    catch (error){
        setError(error.message)
    }

    finally{
        setLoading(false)
    }
    }
  // Функція буде запускатися тільки якщо не буде порожній search, бо при першому рендеру (загрузці сторінки) немає сенсу робити запит, поки нiчого не вводили в поле search
  if(search){
    addMoviesList()
  }
},[search,page])




  //Функція для ортимання інформації з поля пошуку, тобто інпуту
const handleSearch = ({search}) =>{
    //search та page зберігаємо в адресний рядок
    setSearchParams({search, page:1})
  //При введенні нового слова в поле пошуку і клілу (onSubmit) , попередній масив очищаємо, щоб він не залишався на екрані_ і оновлюємо порядок сторінок
    setGallery([]);

}


const loadMore = () =>setSearchParams({search, page:Number(page)+1});


const elements = moviesGallery.map(({ id,original_title }) => (<li key={id} className={styles.item}>
    <Link to={`/movies/${id}`} state={{from:location}} >{original_title}</Link> 
</li>));



  //для подальшої перевірки записуємо в константу, що масив картинок не порожній , тобто Boolean(moviesGallery.length) буде true. А якщо буде порожній , тоьто false, і далі в return не будемо відмальовувати компоненти
  const isGallery=Boolean(moviesGallery.length)
  

    return (
    <div className={styles.app}>
    
        <SearchForm onSubmit={handleSearch}/>
        
        {error && <p>{error}</p>}
        {loading && <Loader/>}
        {isGallery && <p>{elements}</p>}
        {isGallery && btnLoadMore && <Button onClick={loadMore} type="button">Load more</Button> }

        
    </div>
    
    )
  }
