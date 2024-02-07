
import { Route, Routes } from "react-router-dom";

import { MainMenu } from "./MainMenu/MainMenu";
import { HomePage } from "pages/HomePage/NomePage";
import { MoviePage } from "pages/MoviesPage/MoviesPage";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";


export const App = () => {
  return (
    <div>
      <MainMenu/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movies" element={<MoviePage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </div>
  );
};
