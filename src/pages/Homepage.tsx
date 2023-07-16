import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Film,
  FilmTitle,
  HoverDiv,
  MovieDate,
  Films,
  FilmInfo,
  Img,
  Title,
  Trending,
  TrendingCard,
  TrendingText,
  TrandingImg,
} from "../assets/MoviesStyles";
import { useEffect, useState } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1250 },
    items: 3,
  },
  smalldesktop: {
    breakpoint: { max: 1250, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export default function Homepage() {
  const navigate = useNavigate();
  const [trendingData, setTrendingData] = useState<any[]>([]);
  const [recomendedData, setRecomendedData] = useState<any[]>([]);
  const axiosinstance = axios.create({
    baseURL: "https://defiant-wear-crow.cyclic.app/api/",
  });

  const isloggedIn = localStorage.getItem("username");

  useEffect(() => {
    if (isloggedIn == null) {
      navigate("/moviesApp");
    }
    const requestuser = async () => {
      try {
        const trendingResponse = axiosinstance.get("trending");
        const recomendedResponse = axiosinstance.get("recomended");
        const recomendedData = (await recomendedResponse).data;
        const trendingdata = (await trendingResponse).data;
        setRecomendedData(recomendedData);
        setTrendingData(trendingdata);
      } catch (error) {
        console.log(error);
      }
    };
    requestuser();
  }, []);

  return (
    <>
      <Trending>
        <TrendingText>Trending</TrendingText>
        <Carousel responsive={responsive}>
          {trendingData?.map((trendingCards) => {
            return (
              <TrendingCard key={trendingCards.id}>
                <Link to={`/moviesApp/movies/${trendingCards.title}`}>
                  <TrandingImg src={trendingCards.img} />
                  <HoverDiv>
                    <MovieDate>{trendingCards.date}</MovieDate>
                    <FilmTitle>{trendingCards.title}</FilmTitle>
                  </HoverDiv>
                </Link>
              </TrendingCard>
            );
          })}
        </Carousel>
      </Trending>
      <Title>Recommended for you</Title>
      <Films>
        {recomendedData?.map((recomendedcard) => {
          return (
            <Film key={recomendedcard.id}>
              <Link to={`/moviesApp/movies/${recomendedcard.title}`}>
                <Img src={recomendedcard.img} />
                <FilmInfo>{recomendedcard.title}</FilmInfo>
              </Link>
              <FilmInfo>{recomendedcard.date}</FilmInfo>
            </Film>
          );
        })}
      </Films>
    </>
  );
}
