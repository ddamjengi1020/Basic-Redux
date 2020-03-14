import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../component/Todo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");
  const getVal = localStorage.getItem("toDos");
  const currentVal = JSON.parse(getVal);

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText("");
    addTodo(text);
  }

  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {currentVal?.map(item => (
          <Todo {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    toDos: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
