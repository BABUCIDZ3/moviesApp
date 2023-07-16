import { Link, useNavigate } from "react-router-dom";
import { Film, FilmInfo, Films, Img, Title } from "../assets/MoviesStyles";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TvSeries() {
  const [serialsData, setSerialsData] = useState<any[]>([]);

  const axiosinstance = axios.create({
    baseURL: "https://defiant-wear-crow.cyclic.app/api/",
  });
  const isloggedIn = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (isloggedIn == null) {
      navigate("/moviesApp");
    }
    const requestuser = async () => {
      try {
        const serialRquest: any = axiosinstance.get("serials");
        const serialResponse = (await serialRquest).data;
        setSerialsData(serialResponse);
      } catch (error) {
        console.log(error);
      }
    };
    requestuser();
  }, []);

  return (
    <>
      <Title>TV Series</Title>
      <Films>
        {serialsData?.map((seriescard) => {
          return (
            <Film key={seriescard.id}>
              <Link to={`${seriescard.title}serie 1`}>
                <Img src={seriescard.img} />
                <FilmInfo>{seriescard.date}</FilmInfo>
              </Link>
              <FilmInfo>{seriescard.title}</FilmInfo>
            </Film>
          );
        })}
      </Films>
    </>
  );
}
