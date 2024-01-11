import React from 'react'
import '../src/css/Registration.css'
import img1 from './images/pexels-lisa-fotios-1957478.jpg'
import { Form } from 'react-router-dom'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import googleImage from './images/google.png';




export default function Registration() {
  return (
    <>
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100" >
            <div class=" login100-more1" style={{ backgroundImage: `url(${img1})` }}>

            </div>
            <form class="validate-form login100-form1 " >
              <span class="login100-form-title p-b-43">
                Login to continue
              </span>
              <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input class="input100" type="text" name="email" />
                <span class="focus-input100"></span>
                <span class="label-input100">Email</span>
              </div>
              <div class="wrap-input100 validate-input" data-validate="Password is required">
                <input class="input100" type="password" name="pass" />
                <span class="focus-input100"></span>
                <span class="label-input100">Password</span>
              </div>
              <div class="flex-sb-m w-full p-t-3 p-b-32">
                <div class="contact100-form-checkbox">
                  <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label class="label-checkbox100" for="ckb1">
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" class="txt1">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  Login
                </button>
              </div>
              <div class="text-center p-t-46 p-b-20">
                <span class="txt2">
                  or sign up using
                </span>
              </div>
              <div class="login100-form-social flex-c-m">
                <a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
                  <i class="fa fa-facebook-f" aria-hidden="true"></i>
                  <FaFacebook />
                </a>
                <a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <FaWhatsapp />
                </a>
                <a href="#" class="login100-form-social-item flex-c-m bg22 m-r-5">
                  <i class="fa fa-facebook-f" aria-hidden="true"></i>
                  {/* <FaGoogle /> */}
                  <img src={googleImage} alt="Google" className="go-1" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
