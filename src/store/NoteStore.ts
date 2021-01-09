import {makeAutoObservable} from "mobx"
export interface IToDo{
     ID?: string;
  Title?: string;
  IsCompleted?: boolean;
}
 export default class TodoStore {
     constructor() {
        makeAutoObservable(this);
    }
     toDo: Array<IToDo> = [{ID:"2", IsCompleted:false, Title:"Test"}];
     
     addTodo = (todo: string, IsCompleted:boolean) => {
        this.toDo.push({ Title: todo, ID: "1", IsCompleted: IsCompleted });
   }    
     getToDos() {
        return this.toDo;
     }    
}
