import React from "react";
import { Menu, Button, Header, Image } from "semantic-ui-react";
import { setAuthUser } from "../actions/authUser";
import { connect } from "react-redux";

class NavBar extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  onLogout = (e) => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { activeItem } = this.state;
    const { authUser, users } = this.props;
    console.log("NavBar Props:", this.props);
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
              <Image circular src={users[authUser].avatarURL} />
              Welcome Back, {users[authUser].name}
            </Header>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Button secondary onClick={this.onLogout}>
              Logout
            </Button>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    users: state.users,
  };
};

export default connect(mapStateToProps, { setAuthUser })(NavBar);
