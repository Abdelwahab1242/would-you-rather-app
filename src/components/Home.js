import React from "react";
import { NavBar } from "./NavBar";
import { Tab } from "semantic-ui-react";
import { UserCard } from "./UserCard";

const panes = [
  { menuItem: "Unanswered Questions", pane: "saasaaaa" },
  { menuItem: "Answered Questions", pane: "Tab 2 Content" },
];

export class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ margin: "5rem" }}>
          <Tab panes={panes} renderActiveOnly={false} />
          <UserCard />
        </div>
      </div>
    );
  }
}
