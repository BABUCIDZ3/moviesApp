import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Film, FilmInfo, Films, Img, Title2 } from "../assets/MoviesStyles";
import { useEffect, useState } from "react";
export default function Movies() {
  const [movieData, setMovieData] = useState<any[]>([]);
  const axiosinstance = axios.create({
    baseURL: "https://defiant-wear-crow.cyclic.app/api/",
  });
  const navigate = useNavigate();
  const isloggedIn = localStorage.getItem("username");
  useEffect(() => {
    const requestuser = async () => {
      if (isloggedIn == null) {
        navigate("/moviesApp");
      }
      try {
        const moviesResponse = axiosinstance.get("movies");
        const moviesdData = (await moviesResponse).data;
        setMovieData(moviesdData);
      } catch (error) {
        console.log(error);
      }
    };
    requestuser();
  }, []);
  return (
    <>
      <Title2>Movies</Title2>
      <Films>
        {movieData.map((moviescard) => {
          return (
            <Film key={moviescard.id}>
              <Link to={`/moviesApp/movies/${moviescard.title}`}>
                <Img src={moviescard.img} />
                <FilmInfo>{moviescard.date}</FilmInfo>
              </Link>
              <FilmInfo>{moviescard.title}</FilmInfo>
            </Film>
          );
        })}
      </Films>
    </>
  );
}
