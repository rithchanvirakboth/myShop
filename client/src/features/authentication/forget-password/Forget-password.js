import React, { useState } from "react";
import axios from "axios";
import {
  showErrorMessage,
  showSuccessMessage,
} from "../../../components/Notification/showMessage";

const forgetPassword = {
  email: "",
  error: "",
  success: "",
};

function Forgetpassword() {
  const [data, setData] = useState(forgetPassword);

  const { email, error, success } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/user/forgetPassword", { email });
      setData({ ...data, error: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, error: err.response.data.msg, success: "" });
    }
  };

  return (
    <div className="container">
     <div className="notify mt-4">
        {error && showErrorMessage(error)}
        {success && showSuccessMessage(success)}
     </div>

      <div className="d-flex justify-content-center">
        <div className="card-forget-password mt-5">
          <div className="card-body">
            <h5 className="card-title text-center">Forget Password</h5>
            <p className="card-text">
              Please enter your email address to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-submit w-100">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgetpassword;
