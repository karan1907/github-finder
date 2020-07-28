import React, { useState, useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../components/Spinner";
import GithubContext from "../components/context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users, user } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyles}>
        {users.map(user => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

const userStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
