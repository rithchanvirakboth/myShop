import React, { useState } from "react";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../../components/Notification/showMessage";

const registerData = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthDate: "",
  checkbox: false,
  error: "",
  succes: "",
};

function Registerpage() {
  const [user, setUser] = useState(registerData);

  const {
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
    birthDate,
    checkbox,
    error,
    succes,
  } = user;

  const handleCheckbox = (e) => {
    let isChecked = e.target.checked;
    setUser({ ...user, checkbox: isChecked, error: "", succes: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkbox !== true) {
      setUser({
        ...user,
        error: "Please accept the terms and conditions",
        succes: "",
      });
    }else {
      try {
        await fetch("http://localhost:5000/user/register", {
          method: "POST",
          body: JSON.stringify({
            firstname,
            lastname,
            username,
            email,
            password,
            confirmPassword,
            birthDate,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((data) => {
            setUser({
              ...user,
              error: data.erroMessage,
              succes: data.successMessage,
            });
          })
      } catch (err) {
        err.response.data.msg &&
          setUser({ ...user, error: err.response.data.msg, succes: "" });
      }
    }
  };

  return (
    <>
      <div className="container min-vh-100">
        <div className="notification-alert mt-3 mb-2 text-center">
          {error && showErrorMessage(error)}
          {succes && showSuccessMessage(succes)}
        </div>
        <div className="d-flex justify-content-center">
          <div className="card mt-5 w-50">
            <div className="card-body">
              <h1 className="card-title text-center">Register</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mx-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    onChange={(e) =>
                      setUser({ ...user, firstname: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3 mx-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(e) =>
                      setUser({ ...user, lastname: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3 mx-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3 mx-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3 mx-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3 mx-3">
                  <label htmlFor="confirmpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    name="confirmpassword"
                    value={confirmPassword}
                    onChange={(e) =>
                      setUser({ ...user, confirmPassword: e.target.value })
                    }
                  />
                </div>

                <div className="mt-3 mx-3 mb-3">
                  <label htmlFor="birthdate" className="form-label">
                    Birthdate
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    name="birthdate"
                    value={birthDate}
                    onChange={(e) =>
                      setUser({ ...user, birthDate: e.target.value })
                    }
                  />
                </div>

                <div className="mt-3 mx-3 mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    id="checkbox"
                    name="checkbox"
                    value={checkbox}
                    onChange={(e) => handleCheckbox(e)}
                  />
                  <label htmlFor="checkbox" className="form-check-label">
                    I agree to the{" "}
                    <a href="/termsandconditions" className="terms-link">
                      terms and conditions
                    </a>
                  </label>
                </div>

                <div className="mt-3 mx-3 mb-3">
                  <label htmlFor="submit" className="form-label invisible">
                    label
                  </label>
                  <button type="submit" className="btn btn-submit w-100">
                    Register
                  </button>
                </div>
                <div className="mt-3 mx-3 mb-3">
                  <span className="register">
                    Already had an account?{" "}
                    <a href="/login" className="register-link me-1">
                      login
                    </a>
                    now
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registerpage;
