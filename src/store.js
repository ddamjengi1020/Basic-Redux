import { createStore } from "redux";

const val = localStorage.getItem("toDos");
const test = JSON.parse(val);

// Action name
const ADD = "ADD";
const DELETE = "DELETE";

// Functioin called action
const addToDo = text => {
  return { type: ADD, text };
};

const deleteToDo = id => {
  return { type: DELETE, id };
};

// Reducer
const reducer = (state = test || [], action) => {
  let saveVal = state;
  switch (action.type) {
    case ADD:
      saveVal = [...state, { text: action.text, id: Date.now() }];
      localStorage.setItem("toDos", JSON.stringify(saveVal));
      return saveVal;
    case DELETE:
      saveVal = state.filter(todo => todo.id !== action.id);
      localStorage.setItem("toDos", JSON.stringify(saveVal));
      return saveVal;
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
};

export default store;
