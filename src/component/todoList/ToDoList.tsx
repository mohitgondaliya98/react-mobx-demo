import { observer } from 'mobx-react';
import * as React from 'react';
import { Row } from 'reactstrap';
interface ToDoModel {
  ID?: string;
  Title?: string;
  IsCompleted?: boolean;
}

export default class ToDoList extends React.Component<
  { ToDos:any },
  {toDo:Array<any>}
    > {
    
    render() {
     
    if (this.props.ToDos.length === 0) {
      return <div>Please add wishlist to get started</div>;
    }

    return (
      <div>
        <h4>My wishlists</h4>

        <div className="todoList">
          

          {this.props.ToDos.map((todo:any) => {
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