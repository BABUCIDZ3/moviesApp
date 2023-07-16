import styled from "styled-components";
const isloggedin = localStorage.getItem("usertoken");
const currentTheme=localStorage.getItem('color')

export const FilmInfo = styled.h2`
  color: #fff;
  font-size: 20px;
`;

export const Img = styled.img`
  height: 12em;
  width: 100%;
`;

export const Trending = styled.section`
  height: fit-content;
  box-shadow: -100px 0px 100px 10px
    ${currentTheme == "dark" ? "black" : "#168CE1"} inset;
`;

export const TrendingText = styled.h1`
  color: ${currentTheme == "light" ? "#161D2F" : "#fff"};
  font-size: 32px;
`;

export const HoverDiv = styled.div`
  position: relative;
  box-shadow: 0px 0px 186px -85px rgba(0, 0, 0, 1) inset,
    0px -36px 30px 0px rgba(0, 0, 0, 0.15) inset,
    0px -79px 40px 0px rgba(0, 0, 0, 0.1) inset,
    0px 2px 1px 0px rgba(0, 0, 0, 0.06), 0px 4px 2px 0px rgba(0, 0, 0, 0.09),
    0px 8px 4px 0px rgba(0, 0, 0, 0.09), 0px 16px 8px 0px rgba(0, 0, 0, 0.09);
  display: none;
`;

export const LoginTxt = styled.h2`
display: flex;
gap: 10px;
  color: #fff;
  font-size: 30px;
`;

export const AccInfo = styled.h4`
  justify-content: space-between;
  width: 80%;
  display: flex;
  color: #fff;
`;
export const ErrorTxt=styled.h3`
font-size: 18px;
color: red;
`

export const SignUp = styled.p`
  width: fit-content;
  color: #fc4747ff;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-top: 2%;
  color: ${currentTheme == "light" ? "#161D2F" : "#fff"};
  font-size: 30px;
  padding: 1%;
`;

export const TrandingImg = styled.img`
  width: 340px;
`;

export const Title2 = styled(Title)`
  margin: 0;
`;

export const UserName = styled.p`
  color: #fc4747ff;
  font-size: 30px;
`;

export const TrendingCard = styled.div`
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${HoverDiv} {
    display: block;
  }
`;

export const FilmTitle = styled.h2`
  color: #fff;
  position: absolute;
  bottom: 30px;
  left: 24px;
  font-size: 24px;
`;

export const MovieDate = styled.h3`
  position: absolute;
  left: 24px;
  bottom: 60px;
  color: #fff;
  opacity: 0.7;
  z-index: 6534;
`;

export const Films = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Film = styled.div`
  height: fit-content;
  box-shadow: -100px 0px 100px 10px
    ${currentTheme == "dark" ? "black" : "#168CE1"} inset;
  position: relative;
  gap: 10px;
  padding: 1% 0;
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 950px) {
    width: 48%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Incorrect = styled.div`
  color: red;
  height: 100vh;
  display: flex;
  align-items: center;
  font-size: 50px;
  justify-content: center;
  text-align: center;
`;

export const StyledFilmDiv = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;

export const Video = styled.video`
  margin: auto;
  width: 90%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const MovInfo = styled.h2`
  color: ${currentTheme == "light" ? "#161D2F" : "#fff"};
  font-size: 30px;
  display: flex;
  margin: auto;
`;

export const MovInfo2 = styled.p`
  opacity: 0.5;
`;

export const Bar = styled.i`
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  margin-left: 1%;
  @media (max-width: 768px) {
    position: absolute;
    right: 0;
  }
`;

export const HoverSeries = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
`;

export const SeriesList = styled.div`
  overflow: auto;
  position: absolute;
  height: 100%;

  background-color: black;
  right: 5%;
  opacity: 0.8;
`;

export const Serie = styled.div`
  height: 5em;
  font-size: 1em !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Serietitle = styled.h2`
  cursor: pointer;
  color: ${currentTheme == "light" ? "#161D2F" : "#fff"};
  font-size: 30px;
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;

export const ChangeTheme = styled.i`
  cursor: pointer;
  bottom: 3%;
  font-size: 30px;
  color: ${currentTheme == "light" ? "blue" : "gold"};
`;

export const Header = styled.header`
  width: fit-content;
  height: 90vh;
  background-color: ${currentTheme == "dark" ? "#161d2fff" : "#168CE1"};
  border-radius: 20px;
  @media (max-width: 1024px) {
    width: 90%;
    height: 70px;
  }
`;

export const Ul = styled.ul`
  width: 96px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;

export const OutletDiv = styled.div`
  width: 92%;
  height: fit-content;
`;

export const ParentDiv = styled.div`
  overflow: hidden;
  display: flex;
  padding: 2% 0 2% 2%;
  justify-content: ${!isloggedin ? "center" : "space-around"};
  @media (max-width: 1024px) {
    padding: 0;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
`;

export const NavIcons = styled.i`
  font-size: 25px;
`;

export const LogInDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

export const LogInForm = styled.form`
  width: 400px;
  height: 373px;
  background-color: ${currentTheme == "dark" ? "#161d2fff" : "#168CE1"};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 33px;
`;

export const Input = styled.input`
  width: 336px;
  height: 37px;
  background-color: #161d2fff;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  caret-color: red;
`;

export const Button = styled.button`
  width: 336px;
  height: 48px;
  background-color: #fc4747ff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.4s;
  border: none;
  color: #fff;
  &:hover {
    color: ${currentTheme=='dark'?'#fc4747ff':"#fff"};
    background-color: ${currentTheme == "dark" ? "#161d2fff" : "#168CE1"};
    border: 1px solid #fc4747ff;
    transform: scale(1.05);
  }
`;

export const ClipBoard = styled.i`
  color: #fc4747ff;
  font-size: 32px;
`;
