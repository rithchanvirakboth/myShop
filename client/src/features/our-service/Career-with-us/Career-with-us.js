import React from 'react';
import careerImage from '../../../components/assets/Career-image.png';
function Career() {
  return (
    <div className="container">
      <h1 className="bold text-center mt-4">
      WELCOME TO THE CAREER OF MYSHOP.COM
      </h1>
      <div className="card-career">
        <div className="card-body">
          <img src={careerImage} alt="career" className="img-fluid career-img" />

          <div className="card-context">
            <h5 className="card-title text-center my-4">We are looking for a talented and passionate person to join our team.</h5>
            <p className="card-text text-start ms-4 text-wrap">If you are interested in working with us, please send your resume to our email address or contact us via the following information we provide below: 
             </p>
            <p className="card-text text-start ms-4 text-wrap">
              Email: <a href="mailto:rithboth0@gmail.com" className='text-center ms-2'>rithboth0@gmail.com</a>
            </p>
            <p className="card-text text-start ms-4 text-wrap">
              Phone Number: 015812384
            </p>
            <p className="card-text text-start ms-4 text-wrap">
              Telegram: 015812384
            </p>
            <p className="card-text text-start ms-4 text-wrap">
              Facebook: <a href="https://www.facebook.com/rithboth0" className='text-center ms-2'>MyShop</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career