import { Todo } from "./todo";
export type TodoCreationParams = Pick<Todo, "name" | "description">;
export declare class TodoService {
    get(todoid: string): Todo;
    create(todoCreationParams: TodoCreationParams): Todo;
}
