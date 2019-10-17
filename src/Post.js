import React, { useState } from "react";
import AddCommentForm from "./AddCommentForm.js";
import Comment from "./Comment.js";
import Dropdown from "muicss/lib/react/dropdown";
import DropdownItem from "muicss/lib/react/dropdown-item";

export default function Post(props) {
  //   const stateStuff = useState(0);
  //   const count = stateStuff[0];
  //   const setCount = stateStuff[1];
  //it's the same as:
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  let dropdownItems = [
    <DropdownItem key="1">Option 1</DropdownItem>,
    <DropdownItem key="2">Option 2</DropdownItem>
  ];

  return (
    <div className="post">
      <h1>This is the post</h1>
      <div>
        <Dropdown color="danger" label="Dropright" placement="right">
          {dropdownItems}
        </Dropdown>
      </div>
      <button onClick={updateCount}>click</button>
      <p>You clicked so many times!</p>
      <p>{props.author}</p>
      <p>{props.subject}</p>
      <AddCommentForm />
      <Comment />
      <Comment />
    </div>
  );
}
