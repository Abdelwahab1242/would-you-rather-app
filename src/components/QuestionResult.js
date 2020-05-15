import React from "react";
import { Header, Segment, Label, Progress } from "semantic-ui-react";

export class QuestionResult extends React.Component {
  render() {
    return (
      <div>
        <Header as="h2">Results:</Header>
        <Segment color="green" padded>
          <Label as="a" color="orange" ribbon="right">
            Your Answer
          </Label>
          <p>option no. 1</p>
          <Progress
            percent={67}
            label="2 out of 3 votes"
            progress
            color="green"
          />
        </Segment>
        <Segment padded>
          <p>option no. 2</p>
          <Progress percent={33} label="1 out of 3 votes" progress />
        </Segment>
      </div>
    );
  }
}
