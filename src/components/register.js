import React from "react";
import loginImg from "../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state=this.initialValue;
  }

  initialValue={
    fname:'',
    email:'',
    password:'',
    district:'',
    errorMsg:''
  }

  changeHandler=event=>{

    const {name,value}=event.target;
    this.setState(
     { [name] : value}
    )

  }

  submitHandler=event=>
  {
    event.preventDefault();
    console.log(this.state);

    // axios.post('http://localhost:9091/register',this,this.state)
    // .then(res=>{
    //  this.state = res;
    // }).catch(error=>{
    //   this.errorMsg=res.error;
    // })
  
  }

  render() {
       const {fname,email,password,district}=this.state;
    return (
      <form onSubmit={this.submitHandler}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="fname">Full Name</label>
              <input type="text" name="fname" placeholder="full name" value={fname} onChange={this.changeHandler} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" value={email} onChange={this.changeHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" value={password} onChange={this.changeHandler}/>
            </div>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <input type="text" name="district" placeholder="district" value={district} onChange={this.changeHandler}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <input type="submit" className="btn" value="Register"/>
           
        </div>
      </div>
      </form>
    );
  }
}
