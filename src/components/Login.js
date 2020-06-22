import React, { Component } from "react";
 
class Login extends Component {
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
            
                onChange={this.handleChange}
                required
              />
    
              <input
                type="password"
                name="password"
                placeholder="Password"
                
                onChange={this.handleChange}
                required
              />
    
              <button type="submit">Login</button>
            </form>
          </div>
        );
      }
    }

    export default Login;
