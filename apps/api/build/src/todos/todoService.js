export class TodoService {
    get(todoid) {
        return {
            name: "Mocked Todo",
            id: todoid,
            description: "this is description",
            done: true,
        };
    }
    create(todoCreationParams) {
        return {
            name: "Mocked Todo created",
            id: "1",
            description: "This is new description",
            done: true,
        };
    }
}
