
import React, { Component } from 'react'
import '../SignUp.css'

class SingIn extends Component {
  render() {
    return (
        <>
       <div className='signin-form'>
       <div class="container">
                <h1>LogIn Form</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>


                <div class="clearfix">
                <button type="button" class="cancelbtn">Cancel</button>
                <button type="submit" class="signupbtn">Sign Up</button>
                </div>
            </div>
     
        </div>

        </>
     
    )
  }
}

export default SingIn