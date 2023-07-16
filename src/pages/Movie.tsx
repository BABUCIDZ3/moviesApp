import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  MovInfo,
  MovInfo2,
  StyledFilmDiv,
  Video,
} from "../assets/MoviesStyles";
import { useEffect, useState } from "react";
export default function Movie() {
  const [moviesData, setMoviesData] = useState<any>([]);
  const location = useParams();
  const axiosinstance = axios.create({
    baseURL: "https://defiant-wear-crow.cyclic.app/api/",
  });
  const navigate=useNavigate()
    const isloggedIn = localStorage.getItem("username");
  useEffect(() => {
    const requestuser = async () => {
       if (isloggedIn == null) {
         navigate("/moviesApp");
       }
      try {
        const trendingResponse = axiosinstance.get("trending",);
        const recomendedResponse = axiosinstance.get("recomended",);
        const recomendedData = (await recomendedResponse).data;
        const trendingData = (await trendingResponse).data;
        const moviesResponse = axiosinstance.get("movies", );
        const moviesData = (await moviesResponse).data;
        const allMovie = recomendedData.concat(trendingData, moviesData);
        setMoviesData(allMovie);
      } catch (error) {
        console.log(error);
      }
    };
    requestuser();
  }, []);

  return (
    <>
      {moviesData.map((movie: any) => {
        if (location.moviename == movie.title) {
          return (
            <StyledFilmDiv key={movie.id}>
              <Video controls src={movie.src}></Video>
              <MovInfo>
                <MovInfo2>Movie Title:</MovInfo2>
                {movie.title}
              </MovInfo>
              <MovInfo>
                <MovInfo2> Release Date:</MovInfo2> {movie.date}
              </MovInfo>
            </StyledFilmDiv>
          );
        }
      })}
</>
  );
}
