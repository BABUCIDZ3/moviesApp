import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import Tvseries from "./pages/TvSeries";
import Login from "./pages/LogIn";
import Root from "./pages/Root";
import GlobalStyles from "./assets/GlobalStyle";
import Movie from "./pages/Movie";
import Serial from "./pages/Serial";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/moviesApp" element={<Root />}>
      <Route index element={<Login />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:moviename" element={<Movie />} />
      <Route path="tvseries" element={<Tvseries />} />
      <Route path="tvseries/:serialid" element={<Serial />} />
      <Route path="homepage" element={<Homepage />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}
