import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "name" | "description">;

export class TodoService {
    public get(todoid: string): Todo {
        return {
            name: "Mocked Todo",
            id: todoid,
            description: "this is description",
            done: true,
        };
    }

    public create(todoCreationParams: TodoCreationParams): Todo {
        return {
            name: "Mocked Todo created",
            id: "1",
            description: "This is new description",
            done: true,
        };
    }
}
