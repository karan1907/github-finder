import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./users/Users";
import Search from "./users/Search";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  state = {
    users: [],
    loading: false
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search Github users
  searchUser = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search searchUser={this.searchUser} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
