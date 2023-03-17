var ToDo = /** @class */ (function () {
    function ToDo(date, works) {
        this.date = date;
        this.works = works;
    }
    ToDo.prototype.getDate = function () {
        return this.date;
    };
    ToDo.prototype.setDate = function (date) {
        this.date = date;
    };
    ToDo.prototype.getWorks = function () {
        return this.works;
    };
    ToDo.prototype.setWorks = function (works) {
        this.works = works;
    };
    return ToDo;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.todoList = [];
    }
    ToDoList.prototype.addTodo = function (todo) {
        var checkResult = false;
        for (var index = 0; index < this.todoList.length; index++) {
            var element = this.todoList[index];
            if (element.getDate().getTime() === todo.getDate().getTime()) {
                checkResult = true;
                break;
            }
        }
        if (checkResult === false)
            this.todoList.push(todo);
        else
            console.log("Error conflict time, can't add to ToDoList!");
    };
    return ToDoList;
}());
var todolist = new ToDoList();
var todo = new ToDo(new Date, ['1', '2']);
todolist.addTodo(todo);
todolist.addTodo(todo);
todolist.addTodo(todo);
console.log(todolist);
