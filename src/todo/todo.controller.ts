import { Body, Controller, DefaultValuePipe, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { Todo } from './model/todo.model';
import { updateTodoDto } from './dto/updateTodoDto';
import { addTodoDto } from './dto/addTodoDto';
import { MyInterceptor } from './interceptors/duration.interceptor';
import { DataInterceptor } from './interceptors/data.interceptor';


@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Get()
  @UseInterceptors(MyInterceptor)
  @UseInterceptors(DataInterceptor)
  getTodos(): Todo[] {
    return this.todoService.getTodos() 
  }
  @Post()
  addTodo(@Body() body:addTodoDto): Todo {
    return this.todoService.addTodo(body) 
  }
  @Get(':id')
  getTodoById(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.FORBIDDEN}))id:number): Todo | string {
    return this.todoService.findOne(id)

  }

  @Delete(':id')
  deleteById(@Param() params): Todo | string {
    const todo = this.todoService.deleteOne(params.id)
    if (todo)
      return todo
    else
      return 'not found'
  }

  @Patch(':id')
  updateTodoPatch(@Param() params, @Body() updatedTodo: updateTodoDto): Todo {
    return this.todoService.update(params.id, updatedTodo)
  }

  @Put(':id')
  updateTodoPut(@Param() params, @Body() updatedTodo: updateTodoDto): Todo {
    return this.todoService.update(params.id, updatedTodo)
  }

}
