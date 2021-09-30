import React from "react";

export default function TodoItems(props) {
  const { list } = props;
  console.log(list);
  return (
    <div>
      <h1>Your todo list</h1>
      <ul>
        {list.map((todo) => ( <li>{todo}</li> ))}
      </ul>
      {/* {todoItem} */}
    </div>
  );
}
