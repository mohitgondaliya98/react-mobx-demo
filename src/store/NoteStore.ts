import { observable, action ,computed} from "mobx"
export interface IToDo{
     ID?: string;
  Title?: string;
  IsCompleted?: boolean;
}
 export default class TodoStore {
    @observable toDo: Array<IToDo> = [{ID:"2", IsCompleted:false, Title:"Test"}];
     
    @action.bound  
     addTodo = (todo: string) => {
        this.toDo.push({ Title: todo, ID: "1", IsCompleted: false });
   }
    
     @action.bound  
     getToDos() {
        return this.toDo;
     }    
}
//export default new TodoStore