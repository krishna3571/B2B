import React, { useState } from 'react'
import './css/forgetpassword.css'
import './css/otp.css'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import OtpInput from 'react-otp-input';

export default function Forgetpasswrod() {
  const [otp, setOtp] = useState('');
  const [forr, setForr] = useState("for")
  const forget = () => {
    setForr("otp")
  }

  return (
    <>

      {forr == "for" && <div className='main'>
        <div className='box_ps'>
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">
              FORGETPASSWORD
            </span>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" placeholder='Email' name="email" />
              <span className="focus-input100"></span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn" onClick={forget}>
                forgetpassword
              </button>
            </div>
          </form>
        </div>
      </div>}

      {forr == "otp" && <div className='main'>
        <div className='box_ps'>
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">
              OTP
            </span>
            <div class="card-body p-5 text-center">

              <p>Your code was sent to you via email</p>

              <div class="otp-field mb-4">
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </div>


              <div className="container-login100-form-btn">
                <button className="login100-form-btn">
                  submit
                </button>
              </div>
              <p class="resend text-muted mb-0">
                Didn't receive code? <a href="">Request again</a>
              </p>
            </div>

          </form>
        </div>
      </div>}



    </>
  )
}
