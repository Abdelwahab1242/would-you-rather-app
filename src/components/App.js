import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import { Home } from "./Home";

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <div className="App">
        {this.props.authUser === null ? <Login /> : <Home />}
      </div>
    );
  }
}

const mapStateToProps = ({ authUserReducer }) => {
  return {
    authUser: authUserReducer,
  };
};

export default connect(mapStateToProps, { handleInitialData })(App);
