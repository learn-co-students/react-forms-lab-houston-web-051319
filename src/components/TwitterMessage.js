import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingCharacters: this.props.maxChars
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <p>Remaining Character: {this.state.remainingCharacters}</p>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      remainingCharacters: (this.props.maxChars - e.target.value.length)
    })
  }
}

export default TwitterMessage;
