import React from "react";
import { Image, Header, Table, Label } from "semantic-ui-react";
import { connect } from "react-redux";

const label = [
  { color: "yellow", text: "First" },
  { color: "grey", text: "Second" },
  { color: "brown", text: "Third" },
];

const LeaderboardTable = (props) => {
  return (
    <div style={{ margin: "2rem" }}>
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Users</Table.HeaderCell>
            <Table.HeaderCell>Answered questions</Table.HeaderCell>
            <Table.HeaderCell>Created questions</Table.HeaderCell>
            <Table.HeaderCell>Score</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.usersData
            .sort((one, two) => two.score - one.score)
            .map((user, i) => {
              return (
                <Table.Row key={`user:${user.id}`}>
                  <Table.Cell>
                    <Label ribbon color={label[i].color}>
                      {label[i].text}
                    </Label>
                    <Header as="h4" image>
                      <Image src={user.imgURL} rounded size="small" />
                      <Header.Content>{user.name}</Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{user.answersNo}</Table.Cell>
                  <Table.Cell>{user.questionsNo}</Table.Cell>
                  <Table.Cell>
                    <Label circular color="green">
                      {user.score}
                    </Label>
                  </Table.Cell>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  let allUsers = Object.entries(users).map((q) => q[1]);
  let usersData = allUsers.map((user) => ({
    id: user.id,
    imgURL: user.avatarURL,
    name: user.name,
    answersNo: Object.values(user.answers).length,
    questionsNo: user.questions.length,
    score: Object.values(user.answers).length + user.questions.length,
  }));

  return {
    usersData,
  };
};

export default connect(mapStateToProps)(LeaderboardTable);
