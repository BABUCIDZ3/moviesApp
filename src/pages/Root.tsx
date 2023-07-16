import { Link, Outlet } from "react-router-dom";
import "./active.css";
import {
  ClipBoard,
  Header,
  NavIcons,
  OutletDiv,
  Ul,
  ParentDiv,
  ChangeTheme,
} from "../assets/MoviesStyles";
import { useEffect, useState } from "react";
const isloggedin = localStorage.getItem("usertoken");
const currentTheme = localStorage.getItem("color");
export default function Root() {
  const defaultColor = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";
  const currentColor = () => {
    const current = localStorage.getItem("color");
    return current || defaultColor;
  };
  const [color, setColor] = useState(currentColor());
  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);
  const refreshPage = () => {
    window.location.reload();
  };
  const [pathname, setPathname] = useState("");
  setInterval(() => {
    setPathname(window.location.pathname.slice(11));
  });

  return (
    <ParentDiv>
      {!isloggedin ? null : (
        <Header>
          <Ul>
            <li>
              <Link to="/moviesApp">
                <ClipBoard
                  className={`fa-solid fa-clapperboard ${
                    pathname == "" ? "active" : ""
                  }`}
                ></ClipBoard>
              </Link>
            </li>
            <li>
              <Link to="homepage">
                <NavIcons
                  className={`fa-solid fa-border-all ${
                    pathname == "homepage" ? "active" : ""
                  } `}
                ></NavIcons>
              </Link>
            </li>
            <li>
              <Link to="movies">
                <NavIcons
                  className={`fa-solid fa-film  ${
                    pathname == "movies" ? "active" : ""
                  }`}
                ></NavIcons>
              </Link>
            </li>
            <li>
              <Link to="tvseries">
                <NavIcons
                  className={`fa-solid fa-tv ${
                    pathname == "tvseries" ? "active" : ""
                  }`}
                ></NavIcons>
              </Link>
            </li>
            <ChangeTheme
              onClick={() => {
                setColor(color == "dark" ? "light" : "dark");
                refreshPage();
              }}
              className={`fa-solid fa-${
                currentTheme == "light" ? "moon" : "sun"
              }`}
            ></ChangeTheme>
          </Ul>
        </Header>
      )}
      <OutletDiv>
        <Outlet />
      </OutletDiv>
    </ParentDiv>
  );
}
