import React from "react";
import { Header, Form, Divider, Radio, Button } from "semantic-ui-react";

export class QuestionSection extends React.Component {
  render() {
    return (
      <div>
        <Header as="h1">Would You Rather?</Header>
        <Form>
          <Form.Field>
            <Radio
              label="option no 1 bitch"
              name="radioGroup"
              value="optionOne"
            />
            <br />
            <Divider horizontal>Or</Divider>
            <Radio label="ad asa daf af" name="radioGroup" value="optionTwo" />
          </Form.Field>
          <Form.Field>
            <Button size="tiny" fluid positive content="Submit" />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
