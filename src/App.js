import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div align="center">
        <h1>
          Num1:{" "}
          {/* console.log({this.props.num1}) */}
          <span style={{ color: "red", margin: "100px" }}>{this.props.num1}</span>
        </h1>
        <h1>
          Num2:{" "}
          <span style={{ color: "blue", margin: "100px" }}>{this.props.num2}</span>
        </h1>
        <br />
        <br />
        <button
          style={{ margin: '10px' }}
          onClick={() => {
            this.props.updateNum1(this.props.num1); // Update num1 with a new value
          }}
        >
          Update_num1
        </button>
        <button
          style={{ margin: '10px' }}
          onClick={() => {
            this.props.updateNum2(this.props.num2); // Update num2 with a new value
          }}
        >
          Update_num2
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num1: state.rA.num1,
    num2: state.rB.num2
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateNum1: (data) => {
    //   dispatch({ type: "UPDATE_A", value: data });
    // },
    // updateNum2: (data) => {
    //   dispatch({ type: "UPDATE_B", value: data });
    // }
    updateNum1: () => {
      dispatch({ type: "UPDATE_A", value: 1 });
    },
    updateNum2: () => {
      dispatch({ type: "UPDATE_B", value: 1 });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
