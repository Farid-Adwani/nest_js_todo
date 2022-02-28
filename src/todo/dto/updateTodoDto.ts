import { OmitType, PartialType } from "@nestjs/mapped-types";
import { addTodoDto } from "./addTodoDto";


export class updateTodoDto extends PartialType(addTodoDto){}