import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Row } from 'reactstrap';
import ToDoList from './ToDoList';
import ToDoStore from '../store/NoteStore';

@inject('ToDoStore')
@observer
export default class ToDoComponent extends React.Component<
  { ToDoStore: ToDoStore },
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
    );

    this.setState({ Title: '', IsCompleted: false });
  }

  onTitleChange= (event: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({ Title: event.target.value });
  }

  onIsCompleteChange=(event: React.ChangeEvent<HTMLInputElement>)=> {
    this.setState({ IsCompleted: event.target.checked });
  }
    componentDidMount() {
        console.log("Compoenent")
        this.setState({
            toDo: this.props.ToDoStore?.getToDos() || []
        });
    }
    componentWillReceiveProps(props:any) {
        this.setState({
            toDo: props.ToDoStore?.getToDos() || []
        });
    
    }   
    
    render() {
        console.log(this.props.ToDoStore);
      return (
      <div className="todoContainer">
        {this.state.todoError?.message ? (
          <div>
            <div className="alert alert-danger" role="alert">
              Some error occurred. Please try again
            </div>
          </div>
        ) : null}

        <h4 style={{ marginBottom: '30px' }}>Create New Wishlist</h4>

        <form onSubmit={this.addToDo}>
          <div>
            <Row>
              <div className="form-group col-md-8">
                <label className="form-label" htmlFor="Title">
                  Wish
                </label>
                <input
                  placeholder="Enter your Wish"
                  className="form-control"
                  onChange={this.onTitleChange}
                  name="Title"
                  id="Title"
                  style={{ minWidth: '150px' }}
                  value={this.state.Title}
                  required
                />
              </div>

              <div
                className="col-md-2 form-check"
              >
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
              </div>

              <div
                className="col-md-2 mt-30 ml-20"
              >
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </Row>
          </div>
        </form>

        <hr />

        <div className="mt-20">
          <ToDoList ToDos={this.state.toDo} />
        </div>
      </div>
    );
  }
}
