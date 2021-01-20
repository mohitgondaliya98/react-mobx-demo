import React from 'react';
import ToDoStore from "./store/NoteStore"
import Home from "./component/home/home"
import  "./app.css"
export default class App extends React.Component<{}, {}> {
  private todoStore: ToDoStore;

  constructor(props:any) {
    super(props);
    this.todoStore = new ToDoStore();
  }

  componentDidMount() {
    this.todoStore.getToDos();
  }
  render() {
    return (
      <div className="red">Simple text here</div>
    );
  }
}
