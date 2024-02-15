import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage/NomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  return (
    <div>
      
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<MoviesPage/>}/>
        <Route path="movies/:id" element={<MovieDetailsPage/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
    </div>
  );
};
