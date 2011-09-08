(function(){

    /**
     * Todo Model
     * model name, default values
     */
    var Todo = new Vrai.Model("Todo", {
        todo: "",
        done: false
    });

    /**
     * Create new todo
     *
     * @static
     */
    Todo.createNewTodo = function(todo){
        return new Todo({
            todo: todo
        });
    };
	
})();
