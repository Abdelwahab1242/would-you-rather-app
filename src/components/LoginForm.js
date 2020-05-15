import React from "react";
import { Form, Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthUser } from "../actions/authUser";

class LoginForm extends React.Component {
  state = {
    value: "",
  };

  getData = () => {
    return this.props.users.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };

  onChange = (e, { value }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { setAuthUser } = this.props;
    const authUser = this.state.value;
    setAuthUser(authUser);
  };

  render() {
    return (
      <div>
        <div style={{ margin: "5rem" }}>
          <Form onSubmit={this.handleSubmit}>
            <Header as="h4">Sign In</Header>
            <Form.Dropdown
              placeholder="Select a user"
              fluid
              selection
              value={this.state.value}
              options={this.getData()}
              onChange={this.onChange}
              required
            />
            <Button primary>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ questionsReducer }) => {
  return {
    users: Object.values(questionsReducer),
  };
};

export default connect(mapStateToProps, { setAuthUser })(LoginForm);
