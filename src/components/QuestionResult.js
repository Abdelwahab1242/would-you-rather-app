import React from "react";
import { Header, Segment, Label, Progress } from "semantic-ui-react";
import { connect } from "react-redux";

class QuestionResult extends React.Component {
  render() {
    const { authUser, optionOne, optionTwo } = this.props;
    let optionOneVotes = optionOne.votes.length;
    let optionTwoVotes = optionTwo.votes.length;
    let totalVotes = optionOneVotes + optionTwoVotes;
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
                percent={((optionOneVotes / totalVotes) * 100).toFixed(2)}
                label={`${optionOneVotes} votes`}
                progress
                color="green"
              />
            </Segment>
            <Segment padded>
              <p>{optionTwo.text}</p>
              <Progress
                percent={((optionTwoVotes / totalVotes) * 100).toFixed(2)}
                label={`${optionTwoVotes} votes`}
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
                percent={((optionTwoVotes / totalVotes) * 100).toFixed(2)}
                label={`${optionTwoVotes} votes`}
                progress
                color="green"
              />
            </Segment>
            <Segment padded>
              <p>{optionOne.text}</p>
              <Progress
                percent={((optionOneVotes / totalVotes) * 100).toFixed(2)}
                label={`${optionOneVotes} votes`}
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

export default connect(mapStateToProps)(QuestionResult);
