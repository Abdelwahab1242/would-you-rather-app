import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar";
import NoMatch from "./noMatch";
import NewQuestion from "./NewQuestion";
import LeaderboardTable from "./LeaderboardTable";
import QuestionCard from "./QuestionCard";

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.authUser === null ? (
            <Route>
              <Login />
            </Route>
          ) : (
            <React.Fragment>
              <NavBar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/add">
                  <NewQuestion />
                </Route>
                <Route path="/leaderboard">
                  <LeaderboardTable />
                </Route>
                <Route path="/bad_id" component={NoMatch} />

                <Route
                  path="/questions/:question_id"
                  component={QuestionCard}
                />
              </Switch>
            </React.Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps, { handleInitialData })(App);
