import React from "react";

export default class ConditionalClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    if (!this.props.show) {
      return false;
    }

    return (
      <div>
        <h1>Conditional Class Component!</h1>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {(this.state.show && <span>HIDE</span>) || <span>SHOW</span>}
        </button>
        {this.state.show && <h3>Showing Conditional.</h3>}
      </div>
    );
  }
}
