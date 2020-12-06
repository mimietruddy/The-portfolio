import React, { Component } from "react";
import "../assets/css/Login.css"
class LoginPage extends Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
    this.getPassword = this.getPassword.bind(this)
  }
  getEmail = (event) => {
    this.setState({ email: event.target.value })
    console.log(this.state.email)
  }
  getPassword(event){
    this.setState({ password: event.target.value })
    console.log(this.state.password)
  }
  submitData=()=>{

  } 

  render () {
    return (
      <>
        <h1>Login</h1>
        <form className="form" onSubmit={this.submitData}>
          <input type="email" onChange={this.getEmail} placeholder="enter email" />
          <input type="password" onChange={this.getPassword} placeholder="password" />
          <input type="submit" value="Login" />
        </form>
      </>
    )
  }
  };
  export default LoginPage;