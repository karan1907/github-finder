import React, { useState } from "react";

const Search = props => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.searchUser(text);
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
    </div>
  );
};

export default Search;