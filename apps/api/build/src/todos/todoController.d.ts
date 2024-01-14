import { Controller } from "tsoa";
import { Todo } from "./todo";
export declare class TodoController extends Controller {
    getTodo(todoId: string): Promise<Todo>;
}
