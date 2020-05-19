import React from "react";
import {
  Header,
  Form,
  Divider,
  Radio,
  Button,
  Segment,
  Grid,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/users";
import QuestionResult from "./QuestionResult";

class QuestionCard extends React.Component {
  state = {
    value: "",
    answered: false,
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value !== "") {
      const { authUser, handleSaveQuestionAnswer } = this.props;
      const qid = this.props.match.params.question_id;
      handleSaveQuestionAnswer(authUser, qid, this.state.value);
      this.setState({ answered: true });
    }
  };

  render() {
    const disabled = this.state.value === "" ? true : false;

    return (
      <div>
        {this.state.answered === true ? (
          <div style={{ margin: "2rem" }}>
            <QuestionResult
              optionOne={this.props.questionData[0].optionOne}
              optionTwo={this.props.questionData[0].optionTwo}
            />
            <Link to="/">
              <Button>Go Back Home</Button>
            </Link>
          </div>
        ) : (
          <Segment.Group>
            <Header
              as="h3"
              textAlign="left"
              block
              attached="top"
              content={`Asked by ${this.props.questionData[0].author}`}
            />
            <Grid padded divided>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src="" circular size="small" />
                </Grid.Column>
                <Grid.Column width={9}>
                  <Header as="h2">Would You Rather?</Header>

                  <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                      <Radio
                        label={this.props.questionData[0].optionOne.text}
                        name="radioGroup"
                        value="optionOne"
                        checked={this.state.value === "optionOne"}
                        onChange={this.handleChange}
                      />
                      <br />
                      <Divider horizontal>Or</Divider>
                      <Radio
                        label={this.props.questionData[0].optionTwo.text}
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
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, questions }, ownProps) => {
  let allQuestions = Object.entries(questions).map((q) => q[1]);
  let questionData = allQuestions.filter((q) => {
    return q.id === ownProps.match.params.question_id;
  });
  return {
    authUser,
    questionData,
  };
};

export default connect(mapStateToProps, { handleSaveQuestionAnswer })(
  QuestionCard
);
