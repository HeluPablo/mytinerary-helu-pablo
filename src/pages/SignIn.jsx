import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name: event.target[0].value,
      surname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
    };
    localStorage.setItem("user",JSON.stringify(userData));
  };
  return (
    <div className="body-form">
      <section className="form-cont">
        <h2 className="form-title">Sign in</h2>
        <button>Google</button>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              name="email"
              className="input"
              placeholder="Email address"
              type="email"
              required
            />
          </div>
          <div className="">
            <input
              name="password"
              className="input"
              placeholder="password"
              type="password"
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Enter
            </button>
          </div>
          <div className="text-center mt-3">
            Do you have an account?{" "}
            <LinkRouter to="/signup">Sign Up</LinkRouter>{" "}
          </div>
        </form>
      </section>
    </div>
  );
}
