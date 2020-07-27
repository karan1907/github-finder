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
  // Clear Users
  clearUsers = () => this.setState({ users: [], loading: false });
  render() {
    const { loading, users } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <Search
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
