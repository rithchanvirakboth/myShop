import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../../components/Notification/showMessage";
import { dispatchLogin } from "../../../redux/actions/authAction";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
  error: "",
  success: "",
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

function Loginpage() {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password, error, success } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setData({
        ...data,
        error: "Please fill in all fields.",
        success: "",
      });
    }

    if (!validateEmail(email)) {
      return setData({ ...data, error: "Invalid email address.", success: "" });
    }

    try {
      const res = await axios.post("http://localhost:5000/user/login", { email, password });
      localStorage.setItem("firstLogin", true);
      dispatch(dispatchLogin());
      navigate("/");
      setData({ ...data, error: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, error: err.response.data.msg, success: "" });
    }
  };

  return (
    <>
      <div className="container min-vh-100">
        <div className="notify mt-3">
          {error && showErrorMessage(error)}
          {success && showSuccessMessage(success)}
        </div>
        <div className="d-flex justify-content-center">
          <div className="card w-50">
            <div className="card-body">
              <h1 className="card-title text-center">Login</h1>
              <form onSubmit={handleSubmit}>
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
                      setData({ ...data, email: e.target.value })
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
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </div>

                <div className="mt-3 mx-3 mb-3">
                  <label className="form-label invisible">label</label>
                  <button type="submit" className="btn btn-submit w-100">
                    Login
                  </button>
                </div>
                <div className="mt-3 mx-3 mb-3">
                  <span className="register">
                    Don't have an account yet?{" "}
                    <a href="/register" className="register-link me-1">
                      Register
                    </a>
                    now
                  </span>
                  <span className="forget-password float-end">
                    <a href="/forget-password" className="forget-password-link">
                      Forget Password?
                    </a>
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

export default Loginpage;
