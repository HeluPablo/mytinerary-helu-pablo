import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function SignUp() {



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
        <h2 className="form-title">Create a new User</h2>
        <button> Google </button>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              name="Name"
              className="input"
              placeholder="Name"
              type="text"
              required
            />
          </div>
          <div className="">
            <input
              name="Surname"
              className="input"
              placeholder="Surname"
              type="text"
            />
          </div>
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
              {" "}
              Create Account{" "}
            </button>
          </div>
          <div className="text-center mt-3">
            Do you have an existing account?{" "}
            <LinkRouter to="/signin">SignIn</LinkRouter>{" "}
          </div>
        </form>
      </section>
    </div>
  );
}
