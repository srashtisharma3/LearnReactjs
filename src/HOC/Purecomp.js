import React from "react";

export default class PureComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ num: Math.random() * 100 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleButtonClick = () => {
    this.setState({ num: 111 });
  };

  render() {
    return (
      <div>
        <h2>Parent {this.state.num}</h2>
        <button onClick={this.handleButtonClick}>Change</button>
      </div>
    );
  }
}
