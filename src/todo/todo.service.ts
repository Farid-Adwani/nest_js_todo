import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './model/todo.model';
import { updateTodoDto } from './dto/updateTodoDto';
import { addTodoDto } from './dto/addTodoDto';



@Injectable()
export class TodoService {

    public  todos: Todo[] = [new Todo(0, 'todo1', '1'), new Todo(1, 'todo2', '2'), new Todo(2, 'todo3', '3')]


    getTodos()  : any  {
        return this.todos;
    }

    addTodo(todo:addTodoDto): Todo {
        let toadd:Todo=new Todo(this.todos.length+1,todo.name,todo.description)
        this.todos.push(toadd);
        return toadd;
    }
    findOne(id: number) {
        let to: Todo
        this.todos.forEach((todo: Todo) => {
            if (todo.id.toString() === id.toString()) {
                to = todo
            }
        })
        if(!to){ throw new NotFoundException("ID NOT FOUND")}
        return to
    }

    deleteOne(id: number) {
        let to: Todo
        this.todos.forEach((todo: Todo) => {
            if (todo.id.toString() === id.toString()) {

                this.todos.splice(this.todos.indexOf(todo),1);
                console.log(this.todos);
                to = todo
            }
        })
        if(!to){ throw new NotFoundException("ID NOT FOUND")}
        return to
    }

    update(id :number,updatedTodo: updateTodoDto) {
        let t 
        // console.log(updatedTodo)
        this.todos.forEach(todo => {
            if (todo.id.toString() === id.toString()){
                this.todos.splice(this.todos.indexOf(todo))
                if(updatedTodo.name!=""){
                    todo.name = updatedTodo.name

                }
                if(updatedTodo.description!=""){
                    todo.description = updatedTodo.description

                }
                if(updatedTodo.status!=null){
                    todo.status = updatedTodo.status
                }
                this.todos.push(todo)
                t =todo
            }
        })
        if(!t){ throw new NotFoundException("ID NOT FOUND")}
        return t
    }
}


