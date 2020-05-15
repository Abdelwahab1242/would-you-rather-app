import React from "react";
import { Menu, Button, Header, Image } from "semantic-ui-react";

const src =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80";

export class NavBar extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary className="nav-bar">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="New Poll"
            active={activeItem === "newPoll"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Leaderboard"
            active={activeItem === "Leaderboard"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Header as="h5">
              <Image circular src={src} />
              Welcome Back, Patrick
            </Header>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Button secondary>Logout</Button>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
