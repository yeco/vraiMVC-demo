(function(){

    /**
     * TodoStats Model
     * model name, default values
     */
    var TodoStats = new Vrai.Model("TodoStats", {
        done: 0,
        total: 0
    });

    TodoStats.createTodoStats = function(){
        return new TodoStats({
            done: 0,
            total: 0
        });
    };

})();
