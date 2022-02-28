import { TodoStatusEnum } from "../enums/TodoStatusEnum.enum";

export class Todo {
    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public createdAt: Date = new Date(),
        public status: TodoStatusEnum = TodoStatusEnum.waiting 
        ){}
}