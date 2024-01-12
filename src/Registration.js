import React from 'react'
import '../src/css/Registration.css'
import img1 from './images/pexels-lisa-fotios-1957478.jpg'
import { Form } from 'react-router-dom'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import googleImage from './images/google.png';
import 'bootstrap/dist/css/bootstrap.min.css';




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
                SIGN IN
              </span>

              <div className="row">
                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="First Name is required">
                    <input className="input100" type="text" placeholder="First Name" name="fname" />
                    <span className="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                    <input className="input100" type="text" placeholder="Last Name" name="lname" />
                    <span className="focus-input100"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                      name="email" placeholder='Email' />
                    <span class="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="Valid phone number is required">
                    <input class="input100" type="tel" pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
                      maxLength="10" placeholder='Phone Number' name="phone" />
                    <span class="focus-input100"></span>
                  </div>
                </div >
              </div >


              <div class="wrap-input100 validate-input" data-validate="Company name is required">
                <input class="input100" type="text" placeholder='Company name' name="Company" />
                <span class="focus-input100"></span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Address is required">
                <input class="input100" type="text" placeholder='Address' name="address" />
                <span class="focus-input100"></span>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="Pincode is required">
                    <input
                      class="input100"
                      type="tel"
                      placeholder='Pincode'
                      name="pincode"
                      pattern="[0-9]{6}"  // Allow only numbers and enforce a 6-digit pincode
                      maxLength="6"       // Set maximum length to 6
                      title="Pincode must be a 6-digit number"
                    />
                    <span class="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="City is required">
                    <input class="input100" type="text" placeholder='City' name="City" />
                    <span class="focus-input100"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="State is required">
                    <input class="input100" type="text" placeholder='State' name="State" />
                    <span class="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="Country is required">
                    <select class="input100" name="country">
                      <option value="India" selected>India</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      {/* Add more countries as needed */}
                    </select>
                    <span class="focus-input100"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class="input100" type="password" placeholder='Password' name="password" />
                    <span class="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="wrap-input100 validate-input" data-validate="Confirm Password is required">
                    <input class="input100" type="password" placeholder='Confirm Password' name="confirmPassword" />
                    <span class="focus-input100"></span>
                  </div>
                </div>
              </div>


              <div class="flex-sb-m w-full p-t-3 p-b-32">
                <div>
                  <a href="#" class="txt1">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  Submit
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
