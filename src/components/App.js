import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion";
import LeaderboardTable from "./LeaderboardTable";

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <div className="App">
        {this.props.authUser === null ? (
          <Login />
        ) : (
          <React.Fragment>
            <NavBar />
            <Home />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps, { handleInitialData })(App);
