import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2 className="title">Your Eazy Dashboard</h2>
          <form action="">
            <div className="formInput">
              <label>Email/Username</label>
              <input type="text" />
            </div>
            <div className="formInput">
              <label>Password</label>
              <input type="password" />
            </div>
            <button>Login</button>
          </form>
        </div>
        <div className="right">
          <img src="" alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default Login;
