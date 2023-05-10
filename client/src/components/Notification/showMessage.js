import React from "react";

export const showSuccessMessage = (successMessage) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <strong>{successMessage}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export const showErrorMessage = (errorMessage) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>{errorMessage}</strong> 
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
