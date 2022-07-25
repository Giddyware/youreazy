import "./login.scss";

import logo from "../../assets/images/logo_colored.png";
import useContent from "../../hooks/use-content";
import { useState } from "react";
import * as ROUTES from "../../constants/routes";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  //TODO: useNavigate goes here
  const navigate = useNavigate();
  const location = useLocation();

  const redirectUrl = location.state?.path || "/";

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [messageUsername, setMessageUsername] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleBur = (e) => {
    const { value } = e.target;
    console.log(value);
    if (value == "") {
      setMessageUsername("Please enter a valid email or phone number.");
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    //TODO: Firebase auth goes here
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, emailAddress, password)
      .then((response) => {
        navigate(redirectUrl, { replace: true });
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .then((response) => {
        navigate(ROUTES.HOME);
      })

      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
      });
  };

  const { problems } = useContent("problems");
  console.log(problems);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2 className="title">Your Eazy Dashboard</h2>
          <form onSubmit={handleSignIn}>
            <div className="formInput">
              <label>Email/Username</label>
              <input
                type="text"
                placeholder="Email address"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
                onBlur={handleBur}
              />
            </div>
            <div className="formInput">
              <label>Password</label>
              <input
                type="password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <button>Login</button>
          </form>
        </div>
        <div className="right">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default Login;
