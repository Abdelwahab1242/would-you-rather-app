import React from "react";
import { Image, Segment, Header, Grid } from "semantic-ui-react";

const UserCard = (props) => {
  return (
    <div style={{ margin: "1rem" }}>
      <Segment.Group>
        <Header
          as="h3"
          textAlign="left"
          block
          attached="top"
          content={`Asked by ${props.name}`}
        />
        <Grid padded divided>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src={props.imgURL} circular size="small" />
            </Grid.Column>
            <Grid.Column width={9}>{props.children}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    </div>
  );
};

export default UserCard;
