import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <form onSubmit={(e)=>{
        e.preventDefault()
        let usernameLength = this.state.username.split(" ").join("").length
        let passwordLength = this.state.password.split(" ").join("").length
        if(usernameLength !== 0 && passwordLength !== 0){
          this.props.handleLogin(this.state)
        }
        }}>
        <div>
          <label>
            Username
            <input 
            id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleInputChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default LoginForm;
