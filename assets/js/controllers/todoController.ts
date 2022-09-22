import TodoStatus from "../enums/TodoStatus";

interface Todo {
    title: string,
    status: typeof TodoStatus
}

interface TodoController {
    todos: Array<Todo>,
    newTodoTitle: string,
    searchText: string,
    getTodoIndex: (id: number) => number,
    getTodoTodos: () => Array<Todo>,
    getDoneTodos: () => Array<Todo>,
    getSearchTodos: () => Array<Todo>,
    addTodo: () => void,
    deleteTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
    isTodoDone: (id: number) => boolean
}

const todoController: TodoController = {
    todos: [],
    newTodoTitle: '',
    searchText: '',

    getTodoIndex(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        return this.todos.indexOf(todo);
    },

    getTodoTodos() {
        return this.todos.filter((todo) => todo.status === TodoStatus.TODO).reverse();
    },

    getDoneTodos() {
        return this.todos.filter((todo) => todo.status === TodoStatus.DONE).reverse();
    },

    getSearchTodos() {
        return this.todos.filter((todo) => {
            const search = this.searchText.toLowerCase();
            const title = todo.title.toLowerCase();
            return title.includes(search);
        }).reverse();
    },

    addTodo() {
        if(!this.newTodoTitle) {
            return;
        }

        this.todos.push({
            title: this.newTodoTitle,
            status: TodoStatus.TODO,
            id: this.todos.length + 1
        });

        this.newTodoTitle = '';
    },

    deleteTodo(id) {
        const index = this.getTodoIndex(id);

        this.todos.splice(index, 1);
    },

    toggleTodo(id) {
        const index = this.getTodoIndex(id);

        if (this.todos[index].status === TodoStatus.TODO) {
            this.todos[index].status = TodoStatus.DONE;

        } else if (this.todos[index].status === TodoStatus.DONE) {
            this.todos[index].status = TodoStatus.TODO;
        }
    },

    isTodoDone(id) {
        const index = this.getTodoIndex(id);
        if (index !== -1) {
            return this.todos[index].status === TodoStatus.DONE;
        } else {
            return false;
        }
    }
};

export default () => (todoController);