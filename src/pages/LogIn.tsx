import { useState } from "react";
import {
  AccInfo,
  Button,
  ClipBoard,
  ErrorTxt,
  Input,
  LogInDiv,
  LogInForm,
  LoginTxt,
  SignUp,
  UserName,
} from "../assets/MoviesStyles";
import axios from "axios";

export default function Login() {
  const [accInfo, setAccInfo] = useState("login");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  const user = {
    username,
    password,
  };

  const signUpUser = {
    username,
    password,
    email,
  };

  const logInnedUsername = localStorage.getItem("username");

  const axiosinstance = axios.create({
    baseURL: "https://defiant-wear-crow.cyclic.app/api/",
  });

  const config = {
    headers: {
      Authorization: process.env.REACT_APP_METHOD_PASSWORD,
    },
  };

  axiosinstance.get(`signup/${logInnedUsername}`).then((Response) => {
    setIsLoggedIn(Response.data[0]?.isLoggedIn);
  });

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <LogInDiv>
      <ClipBoard className="fa-solid fa-clapperboard"></ClipBoard>
      {accInfo == "login" && isLoggedIn == undefined ? (
        <LogInForm
          onSubmit={(e) => {
            e.preventDefault();
            axiosinstance
              .post("login", user, config)
              .then(function (response) {
                if (response.data.token) {
                  localStorage.setItem("usertoken", response.data.token);
                  localStorage.setItem("username", username);
                  axiosinstance
                    .post(
                      `signup/${username}`,
                      {
                        isLoggedIn: true,
                      },
                      config
                    )
                    .then(() => {
                      refreshPage();
                    });
                }
              })
              .catch(function (error) {
                setLoginError(error.response.data.error);
              });
          }}>
          <LoginTxt>Login</LoginTxt>
          <Input
            type="text"
            onChange={(e) => {
              setLoginError("");
              setusername(e.target.value);
            }}
            placeholder="Name"
            required
            maxLength={10}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            minLength={8}
            onChange={(e) => {
              setLoginError("");
              setpassword(e.target.value);
            }}
          />
          <Button type="submit">Login to your account</Button>
          <ErrorTxt>{loginError}</ErrorTxt>
          <span>
            <AccInfo>
              Don’t have an account?
              <SignUp
                onClick={() => {
                  setpassword("");
                  setusername("");
                  setAccInfo("signUp");
                }}>
                Sign Up
              </SignUp>
            </AccInfo>
          </span>
        </LogInForm>
      ) : null}
      {accInfo == "signUp" ? (
        <LogInForm
          onSubmit={(e) => {
            e.preventDefault();
            axiosinstance
              .post("signup", signUpUser, config)
              .then(function () {
                setAccInfo("login");
              })
              .catch(function (error) {
                setSignUpError(error.response.data.error);
              });
          }}>
          <LoginTxt>Sign Up</LoginTxt>
          <Input
            type="text"
            placeholder="Enter Your Name"
            required
            maxLength={10}
            onChange={(e) => {
              setusername(e.target.value);
              setSignUpError("");
            }}
          />
          <Input
            type="password"
            placeholder="Enter Your Password"
            required
            minLength={8}
            onChange={(e) => {
              setpassword(e.target.value);
              setSignUpError("");
            }}
          />
          <Input
            type="email"
            placeholder="Enter Your Email"
            required
            minLength={8}
            onChange={(e) => {
              setEmail(e.target.value);
              setSignUpError("");
            }}
          />
          <Button>Create an account</Button>
          <AccInfo>
            Already have an account?
            <SignUp
              onClick={(e) => {
                setpassword("");
                setusername("");
                e.preventDefault();
                setAccInfo("login");
              }}>
              Login
            </SignUp>
          </AccInfo>
          <ErrorTxt>{signUpError}</ErrorTxt>
        </LogInForm>
      ) : null}

      {isLoggedIn == true ? (
        <LogInForm>
          <LoginTxt>
            hi <UserName>{logInnedUsername}</UserName>
          </LoginTxt>
          <Button
            onClick={(e) => {
              e.preventDefault();
              axiosinstance
                .delete(`signup/${logInnedUsername}`)
                .then(() => {
                  localStorage.removeItem("username");
                  localStorage.removeItem("usertoken");
                })
                .then(() => {
                  refreshPage();
                });
            }}>
            delete your account
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
                  localStorage.removeItem("username");
                  localStorage.removeItem("usertoken");
              axiosinstance
                .post(
                  `signup/${logInnedUsername}`,
                  {
                    isLoggedIn: false,
                  },
                  config
                )
                .then(() => {
                  refreshPage();
                });
            }}>
            Log Out
          </Button>
        </LogInForm>
      ) : null}
    </LogInDiv>
  );
}
