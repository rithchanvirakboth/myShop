import React from "react";

function Jumbotron() {
  return (
    <div className="footer-jumbotron">
      <div className="container-fluid bg-danger">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron jumbotron-fluid bg-danger">
              <div className="container">
                <h1 className="display-4 text-white">Fluid jumbotron</h1>
                <p className="lead text-white">
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
