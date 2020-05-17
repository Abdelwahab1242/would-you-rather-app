import React from "react";
import LoginForm from "./LoginForm";
import { Header, Image, Grid } from "semantic-ui-react";
import { connect } from "react-redux";

const style = {
  h1: {
    marginTop: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "1em",
    marginBottom: "2em",
    padding: "1em 0em",
  },
  last: {
    marginBottom: "300px",
  },
};

class Login extends React.Component {
  render() {
    return (
      <div>
        {console.log("Login", this.props)}
        <Header
          as="h1"
          content="Would you Rather?"
          style={style.h1}
          textAlign="center"
        />
        <Header
          as="h3"
          content="Please sign in to continue"
          style={style.h3}
          textAlign="center"
        />
        <Grid centered columns={2}>
          <Grid.Row centered columns={4}>
            {this.props.users.map((user) => (
              <Grid.Column key={`img${user.id}`}>
                <Image src={user.avatarURL} circular />
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(Login);
