import React from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <Header as="h1">404 page not Found</Header>
        <Header as="h4">Nothing here for you</Header>
        <Link to="/" exact>
          <Button>Go Back Home</Button>
        </Link>
      </div>
    );
  }
}

export default NoMatch;
