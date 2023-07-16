import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Bar,
  HoverSeries,
  MovInfo,
  Serie,
  SeriesList,
  StyledFilmDiv,
  Video,
} from "../assets/MoviesStyles";
import { useEffect } from "react";
import axios from "axios";

export default function Serial() {
  const location = useParams();
  const id = location.serialid;
  const [showSeries, setShowSeries] = useState(false);
  const [serialsData, setSerialsData] = useState<any[]>([]);

  const axiosinstance = axios.create({
    baseURL: "https://defiant-wear-crow.cyclic.app/api/",
  });
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("username");

  type series = {
    title: string;
    date: number;
    series: [];
    img: string;
    id: string;
  };

  useEffect(() => {
    if (isLoggedIn == null) {
      navigate("/moviesApp");
    }
    const requestuser = async () => {
      try {
        const serialRequest = axiosinstance.get("serials");
        const serialResponse = (await serialRequest).data;
        const arr: any[] = [];
        serialResponse.map((series: series) => {
          series.series.map((allSerie) => {
            arr.push(allSerie);
          });
        });
        setSerialsData(arr);
      } catch (error) {
        console.log(error);
      }
    };
    requestuser();
  }, []);

  return (
    <StyledFilmDiv>
      {serialsData.map((title) => {
        if (id == title.serietitle) {
          return (
            <HoverSeries key={title.serietitle}>
              <Video controls src={title.seriesrc}></Video>
              <Bar
                onClick={() => {
                  if (showSeries == false) {
                    setShowSeries(true);
                  } else {
                    setShowSeries(false);
                  }
                }}
                className="fa-solid fa-bars"></Bar>
              <>
                {showSeries == true ? (
                  <SeriesList>
                    {serialsData.map((serie) => {
                      if (id?.includes(serie.serietitle.slice(0, -2))) {
                        return (
                          <Serie key={serie.serietitle}>
                            <Link
                              onClick={() => {
                                if (showSeries == true) {
                                  setShowSeries(false);
                                }
                              }}
                              to={`/moviesApp/tvseries/${serie.serietitle}`}>
                              <MovInfo>{serie.serietitle}</MovInfo>
                            </Link>
                          </Serie>
                        );
                      }
                    })}
                  </SeriesList>
                ) : null}
              </>
            </HoverSeries>
          );
        }
      })}
    </StyledFilmDiv>
  );
}
