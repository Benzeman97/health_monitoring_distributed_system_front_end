import React from "react";
import loginImg from "../login.svg";
import Axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:'',
      password:'',
      errorMsg:''
    }
  }

  changeHandler=event=>{
    const {name,value}=event.target;

    this.setState(
      {[name]:value}
    )
  }

  submitHandler=event=>{
    event.preventDefault();
    console.log(this.state);
  //   axios.post('http://localhost:9091/login',this,this.state)
  //   .then(res=>{
  //    this.state = res;
  //   }).catch(error=>{
  //     errorMsg=res.error;
  //   })
  }

  render() {

    const {username,password}=this.state;
    return (
      <form onSubmit={this.submitHandler}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={username} onChange={this.changeHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
      </form>
    );
  }
}
