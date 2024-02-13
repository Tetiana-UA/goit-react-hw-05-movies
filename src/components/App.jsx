
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

import { MainMenu } from "./MainMenu/MainMenu";
import { HomePage } from "pages/HomePage/NomePage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";



export const App = () => {
  return (
    <div>
      
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="movies" element={<MoviesPage/>}/>
        <Route path="movies/:id" element={<MovieDetailsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
    </div>
  );
};
