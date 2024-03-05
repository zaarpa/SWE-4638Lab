import React, { Component } from "react";
import userData from "./userInfo.json";
import ReloadButton from "./ReloadButton";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      userData: userData,
    };
  }

  componentDidMount() {
    this.setState({
      user: this.state.userData,
      loading: false,
    });
  }

  reloadUserData = () => {
    this.setState({ loading: true });
    this.setState({
      user: userData,
      loading: false,
    });
  };

  render() {
    console.log("profile rendered");
    console.log(this.state.user);
    const { user } = this.state;

    return (
      <div>
        <h2>User Info</h2>
        <p>Name: {user ? user.name : ""}</p>
        <p>Email: {user ? user.email : ""}</p>
        <p>Gender: {user ? user.gender : ""}</p>
        <ReloadButton onClick={this.reloadUserData} />
      </div>
    );
  }
}

export default UserProfile;
