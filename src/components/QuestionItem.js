import React from "react";
import { Header, Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const QuestionItem = (props) => {
  return (
    <div style={{ margin: "1rem" }}>
      <Header as="h2">Would You Rather?</Header>
      <Header as="h5" content={props.optionOne.text} />
      <br />
      <Divider horizontal>Or</Divider>
      <Header as="h5" content={props.optionTwo.text} />
      <Link to={`/questions/${props.qid}`}>
        <Button size="medium" fluid positive content="Answer" />
      </Link>
    </div>
  );
};

export default QuestionItem;
