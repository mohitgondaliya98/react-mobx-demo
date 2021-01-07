import { observer } from 'mobx-react';
import * as React from 'react';
import { Row } from 'reactstrap';
interface ToDoModel {
  ID?: string;
  Title?: string;
  IsCompleted?: boolean;
}

@observer
export default class ToDoList extends React.Component<
  { ToDos: ToDoModel[] },
  {toDo:Array<any>}
    > {
    componentDidMount() {
        console.log("List")
        this.setState({
            toDo: this.props.ToDos
        });
    }
    componentWillReceiveProps(props:any) {
        this.setState({
              toDo: this.props.ToDos,
        });
    
    }   
    
    render() {
        console.log(this.props.ToDos);
    if (this.props.ToDos.length === 0) {
      return <div>Please add wishlist to get started</div>;
    }

    return (
      <div>
        <h4>My wishlists</h4>

        <div className="todoList">
          

          {this.state.toDo.map((todo) => {
            return (
              <Row key={todo.ID} className="p-1">
                <div className="todoItem col-md-8">{todo.Title}</div>
                <div className="col-md-2 todoItem">
                  {todo.IsCompleted ? (
                   "Yes"
                  ) : (
                    "NO"
                  )}
                    </div>
                    <hr/>
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}