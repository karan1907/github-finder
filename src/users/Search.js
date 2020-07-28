import React, { useState, useContext } from "react";
import GithubContext from "../components/context/github/githubContext";
import AlertContext from "../components/context/alert/alertContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      return alertContext.setAlert("Please Enter Something!", "light");
    }
    githubContext.searchUser(text);
    setText("");
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="text"
          placeholder="Search...."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          onClick={onSubmit}
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
