import React from "react";
import { Segment, Header, Form, Divider } from "semantic-ui-react";

class NewQuestion extends React.Component {
  render() {
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
          <Form style={{ padding: "2.5rem" }}>
            <Header as="h2">Would You Rather?</Header>
            <Form.Field>
              <br />
              <Form.Input placeholder="Enter First Option" />
              <Divider horizontal>Or</Divider>
              <Form.Input placeholder="Enter Second Option" />
            </Form.Field>
            <Form.Field>
              <Form.Button size="medium" fluid positive content="Submit" />
            </Form.Field>
          </Form>
        </Segment.Group>
      </div>
    );
  }
}

export default NewQuestion;
