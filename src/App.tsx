import React from 'react';
import ToDoStore from "./store/NoteStore"
import { Provider } from 'mobx-react';
import ToDoComponent from './component/todoList/ToDoComponent';
import ToDoSummary from './component/todoList/ToDoSummary';
import home from "./component/home/home"
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
      <div className="App">
        <h3>ToDo App using React and Mobx</h3>
          <home/>
         {/* <Provider ToDoStore={this.todoStore}>
          <ToDoComponent />
          <ToDoSummary />
        </Provider> */}
      </div>
    );
  }
}
