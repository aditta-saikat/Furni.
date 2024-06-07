import React from "react";

const Signin = () => {
  return (
    <div className="containers signin">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Login</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <a href="#">Forgot password?</a>
          <input type="button" className="button" value="Login" />
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account?
            <label htmlFor="check">Signup</label>
          </span>
        </div>
      </div>
      <div className="registration form">
        <header>Signup</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Create a password" />
          <input type="password" placeholder="Confirm your password" />
          <input type="button" className="button" value="Signup" />
        </form>
        <div className="signup">
          <span className="signup">
            Already have an account?
            <label htmlFor="check">Login</label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
