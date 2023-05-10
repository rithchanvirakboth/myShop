import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { showErrorMessage, showSuccessMessage } from "../../../components/Notification/showMessage";
const resetPassword = {
  password: "",
  confirmPassword: "",
  error: "",
  success: "",
};

function ResetPassword() {
  const {access_token} = useParams();
  const [data, setData] = useState(resetPassword);

  const { password, confirmPassword, error, success } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      return setData({...data, error: "Password does not match.", success: ""})
    }

    if(password.length < 6) {
      return setData({...data, error: "Password must be at least 6 characters.", success: ""})
    }

    try {
      const res = await axios.post("http://localhost:5000/user/resetPassword", { password, confirmPassword }, {
        headers: {Authorization: access_token}
      });
      setData({ ...data, error: "", success: res.data.msg });
    }catch (err) {
      err.response.data.msg &&
        setData({ ...data, error: err.response.data.msg, success: "" });
    }
  }

  return (
    <div className="container">
      <div className="notify mt-4">
        {error && showErrorMessage(error)}
        {success && showSuccessMessage(success)}
      </div>
      <div className="d-flex justify-content-center">
        <div className="card-forget-password mt-1">
          <div className="card-body">
            <h5 className="card-title text-center">Reset Password</h5>
            <form onSubmit={handleSubmit}>
              <p className="card-text">Please enter your new password.</p>
              <div className="form-group mt-3">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Re-enter New Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                />
              </div>
              <div className="form-group mt-4">
                <button type="submit" className="btn btn-submit w-100">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
