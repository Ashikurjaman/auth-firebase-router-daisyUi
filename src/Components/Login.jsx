import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

const Login = () => {
    const {signIn} = useContext(UserContext);
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then((result) => {
        // Signed in 
        const user = result.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Join our community and start your fitness journey today! Sign up for
            a membership{" "}
            <Link to="/register" className="label-text-alt link link-hover">
              Join
            </Link>
            .
          </p>
          <p className="py-6">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
          <p className="py-6">
            Need assistance? Our support team is here to help. Contact us at{" "}
            <a href="support@email.com">support@email.com</a> or call
            01852653698.
          </p>
          <p className="py-6">Let's achieve your fitness goals together!</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <label className="label">
            <Link to="/register" className="align-middle label-text-alt link link-hover">
              Dont't Have account?Please Join Now!
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
