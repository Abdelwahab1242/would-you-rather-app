import React from "react";
import { Segment, Header, Form, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class NewQuestion extends React.Component {
  state = {
    validSubmit: false,
    option1: "",
    option2: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authUser, handleSaveQuestion } = this.props;
    const { option1, option2 } = this.state;

    new Promise((res, rej) => {
      handleSaveQuestion(option1, option2, authUser);
      setTimeout(() => res("success"), 1000);
    }).then(() => {
      this.setState({
        option1: "",
        option2: "",
      });
      this.setState({ validSubmit: true });
    });
  };

  render() {
    const disabled = this.state.option1 === "" || this.state.option2 === "";

    if (this.state.validSubmit === true) {
      return <Redirect to="/" />;
    }
    return (
      <div style={{ margin: "2.5rem" }}>
        <Segment.Group>
          <Header
            as="h1"
            textAlign="left"
            block
            attached="top"
            content="Create a New Question"
          />
          <Form style={{ padding: "2.5rem" }} onSubmit={this.handleSubmit}>
            <Header as="h2">Would You Rather?</Header>
            <Form.Field>
              <br />
              <Form.Input
                placeholder="Enter First Option"
                id="option1"
                value={this.state.option1}
                onChange={this.handleChange}
              />
              <Divider horizontal>Or</Divider>
              <Form.Input
                placeholder="Enter Second Option"
                id="option2"
                value={this.state.option2}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Button
                size="medium"
                fluid
                positive
                content="Submit"
                disabled={disabled}
              />
            </Form.Field>
          </Form>
        </Segment.Group>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps, { handleSaveQuestion })(NewQuestion);
