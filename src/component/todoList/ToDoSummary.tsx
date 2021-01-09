import { inject, observer } from 'mobx-react';
import * as React from 'react';
import ToDoStore from '../../store/NoteStore';

@inject('ToDoStore')
@observer
export default class ToDoSummary extends React.Component<
  { ToDoStore?: ToDoStore },
  {}
> {
  render() {
    const totalToDos = this.props.ToDoStore?.toDo.length ?? 0;
    const completedToDos =
      this.props.ToDoStore?.toDo.filter((x) => x.IsCompleted).length ?? 0;

    return (
      <div>
         {totalToDos - completedToDos} ToDo(s) pending from{' '}
        {totalToDos} ToDo(s)
      </div>
    );
  }
}
