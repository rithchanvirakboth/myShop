import React, { useState, useEffect } from "react";
import { showErrorMessage, showSuccessMessage } from "../../../components/Notification/showMessage";
import { useParams } from "react-router-dom";
import axios from "axios";

function EmailVerify() {
  const [success, setSuccess] = useState('');
  const { activation_token } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post('http://localhost:5000/user/activate', { activation_token });

          setSuccess(res.data.successMessage);
        } catch (err) {
          err.response.data.errorMessage && setError(err.response.data.errorMessage);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div className="container d-flex justify-content-center align-items-center mt-4">
      {success && showSuccessMessage(success)}
      {error && showErrorMessage(error)}
    </div>
  );
}

export default EmailVerify;
