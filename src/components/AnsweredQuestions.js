import React from "react";
import { Header, Segment, Label, Progress } from "semantic-ui-react";
import { connect } from "react-redux";

class AnsweredQuestions extends React.Component {
  render() {
    const { authUser, optionOne, optionTwo } = this.props;
    return (
      <div>
        <Header as="h2">Results:</Header>
        {optionOne.votes.includes(authUser) ? (
          <div>
            <Segment color="green" padded>
              <Label as="a" color="orange" ribbon="right">
                Your Answer
              </Label>
              <p>{optionOne.text}</p>
              <Progress
                percent={100}
                label={`${optionOne.votes.length} votes`}
                progress
                color="green"
              />
            </Segment>
            <Segment padded>
              <p>{optionTwo.text}</p>
              <Progress
                percent={5}
                label={`${optionTwo.votes.length} votes`}
                progress
              />
            </Segment>
          </div>
        ) : optionTwo.votes.includes(authUser) ? (
          <div>
            <Segment color="green" padded>
              <Label as="a" color="orange" ribbon="right">
                Your Answer
              </Label>
              <p>{optionTwo.text}</p>
              <Progress
                percent={100}
                label={`${optionTwo.votes.length} votes`}
                progress
                color="green"
              />
            </Segment>
            <Segment padded>
              <p>{optionOne.text}</p>
              <Progress
                percent={5}
                label={`${optionOne.votes.length} votes`}
                progress
              />
            </Segment>
          </div>
        ) : (
          <Header as="h4">No Answered Questions Yet!</Header>
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

export default connect(mapStateToProps)(AnsweredQuestions);
