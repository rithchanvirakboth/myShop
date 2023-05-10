import React from 'react'

function Forgetpassword() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card-forget-password mt-5">
        <div className="card-body">
          <h5 className="card-title text-center">Forget Password</h5>
          <p className="card-text">Please enter your email address to reset your password.</p>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name='email'
                
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-submit w-100">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Forgetpassword