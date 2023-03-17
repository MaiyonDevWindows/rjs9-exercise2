class ToDo {
    private date: Date;
    private works: string[];
    constructor(date: Date, works: string[]) {
        this.date = date;
        this.works = works;
    }
    getDate() {
        return this.date;
    }
    setDate(date: Date) {
        this.date = date;
    }
    getWorks() {
        return this.works;
    }
    setWorks(works: string[]) {
        this.works = works;
    }
}
class ToDoList {
    private todoList: ToDo[];
    constructor() {
        this.todoList = [];
    }
    addTodo(todo: ToDo) {
        let checkResult = false;
        for (let index = 0; index < this.todoList.length; index++) {
            const element = this.todoList[index];
            if (element.getDate().getTime() === todo.getDate().getTime()) {
                checkResult = true;
                break;
            }
        }
        if (checkResult === false)
            this.todoList.push(todo);
        else console.log("Error conflict time, can't add to ToDoList!");
    }
}
let todolist = new ToDoList();
let todo = new ToDo(new Date, ['1', '2']);
todolist.addTodo(todo);
todolist.addTodo(todo);
todolist.addTodo(todo);
console.log(todolist);