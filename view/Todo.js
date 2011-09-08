(function(){

    /**
     * Todo View
     */
    var TodoView = new Vrai.View("TodoView", {
        template: new EJS({
            url: './view/Todo.ejs'
        }),
        container: document.getElementById('todoContainer'),
        tag: "div",
        events: function(){
            
             $('.select', this.el).bind('click', (function(todo){
                     return function(){
                      Controller.toggleDone(todo);
                     };
                   
     	       })(this));
               
               
             $('.remove', this.el).bind('click', (function(todo){
                     return function(){
                        Controller.removeTodo(todo);
                     };
                   
     	       })(this));
               
               
            $('.edit', this.el).bind('click', (function(todo){
                     return function(){
                        Controller.editTodo(todo);
                     };
                   
     	       })(this));


            $('.todoText', this.el).bind('dblclick', (function(todo){
                     return function(){
                        Controller.editTodo(todo);
                     };
                   
     	       })(this));

	     
        },
        render: function(){
            Controller.updateStats();
        }
    });
    
    window.TodoView = TodoView;

})();
