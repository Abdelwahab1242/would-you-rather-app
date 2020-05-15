import React from "react";
import { Image, Segment, Header, Grid } from "semantic-ui-react";
import { QuestionSection } from "./QuestionSection";
import { QuestionResult } from "./QuestionResult";

const src =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80";

export class UserCard extends React.Component {
  render() {
    return (
      <div>
        <Segment.Group>
          <Header
            as="h3"
            textAlign="left"
            block
            attached="top"
            content="Asked by Koheen"
          />
          <Grid padded divided>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src={src} circular size="small" />
              </Grid.Column>
              <Grid.Column width={9}>
                <QuestionResult />
                {/* <QuestionSection /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
      </div>
    );
  }
}
