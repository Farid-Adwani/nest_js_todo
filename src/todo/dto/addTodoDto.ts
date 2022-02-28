import { IsNotEmpty, MaxLength, MinLength, minLength } from "class-validator";
import { TodoStatusEnum } from "../enums/TodoStatusEnum.enum";

export class addTodoDto {

    @IsNotEmpty()
    @MinLength(3,{message:"toooooooooooooooo short <3"})
    @MaxLength(10,{message:"toooooooooooooooo long >10"})

    name: string ;
    @IsNotEmpty()
    @MinLength(10,{message:"toooooooooooooooo short <10"})

    description: string;
    status: TodoStatusEnum;
   
}
