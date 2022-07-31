import React, { Component } from 'react'
import '../SignUp.css'

class SignUp extends Component {
  render() {
    return (
        <>
      <div className='singup-form'>

        

            <div class="container">
                <h1>SignUp Form</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                
                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required/>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

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

export default SignUp