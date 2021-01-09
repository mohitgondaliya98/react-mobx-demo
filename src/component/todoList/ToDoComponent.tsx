import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Row } from 'reactstrap';
import ToDoList from './ToDoList';
import ToDoStore from '../../store/NoteStore';

@inject('ToDoStore')
@observer
export default class ToDoComponent extends React.Component<
  { ToDoStore?: ToDoStore },
  { Title: string; IsCompleted: boolean; todoError: Error | null ,toDo:Array<any>}
> {
  constructor(props:any) {
    super(props);
    this.state = { Title: '', IsCompleted: false, todoError: null, toDo:[] };

  }

  addToDo =async  (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();

    await this.props.ToDoStore?.addTodo(
      this.state.Title,
      this.state.IsCompleted
    );

    this.setState({ Title: '', IsCompleted: false });
  }

  onTitleChange= (event: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({ Title: event.target.value });
  }

  onIsCompleteChange=(event: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({ IsCompleted: event.target.checked });
  }
    
    render() {
      const {toDo} = this.props.ToDoStore || { toDo: [] }
      return (
      <div >
       
        <h4 style={{ marginBottom: '30px' }}>Create New To Do</h4>

        <form onSubmit={this.addToDo}>
                <input
                  placeholder="Enter your to do"
                  onChange={this.onTitleChange}
                  name="Title"
                  id="Title"
                  style={{ minWidth: '150px' }}
                  value={this.state.Title}
                  required
                />

                <input
                  type="checkbox"
                  className="form-check-input"
                  id="IsCompleted"
                  name="IsCompleted"
                  onChange={this.onIsCompleteChange}
                  checked={this.state.IsCompleted}
                />

                <label htmlFor="IsCompleted" className="form-check-label">
                  Completed?
                </label>

                <button type="submit" className="btn btn-primary">
                  Add
                </button>

        </form>

        <hr />

        <div className="mt-20">
          <ToDoList ToDos={toDo} />
        </div>
      </div>
    );
  }
}
