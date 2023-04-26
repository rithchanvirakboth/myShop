import React from 'react'

function Loginpage() {
  return (
    <>
      <div className="container min-vh-100">
        <div className="d-flex justify-content-center">
          <div className="card mt-5 w-50">
            <div className="card-body">
              <h1 className="card-title text-center">Login</h1>
              <form>
                <div className="mb-3 mx-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3 mx-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>

                <div className="mt-3 mx-3 mb-3">
                  <label htmlFor="password" className="form-label invisible">label</label>
                  <button type="submit" className="btn btn-submit w-100">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loginpage