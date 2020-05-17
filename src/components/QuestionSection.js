import React from "react";
import { Header, Form, Divider, Radio, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/users";

class QuestionSection extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value !== "") {
      const { authUser, qid, handleSaveQuestionAnswer } = this.props;
      handleSaveQuestionAnswer(authUser, qid, this.state.value);
    }
  };

  render() {
    const disabled = this.state.value === "" ? true : false;
    console.log("Q--Props-dude", this.props);
    return (
      <div>
        <Header as="h2">Would You Rather?</Header>

        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Radio
              label={this.props.optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={this.state.value === "optionOne"}
              onChange={this.handleChange}
            />
            <br />
            <Divider horizontal>Or</Divider>
            <Radio
              label={this.props.optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={this.state.value === "optionTwo"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              size="tiny"
              fluid
              positive
              content="Submit"
              disabled={disabled}
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(
  QuestionSection
);
