(function(){
 
    var Controller = {
        todoStatsInstance: {},
        init: function(){
            $('form').bind('submit',function(e){
                e.preventDefault();
            })
            
            
            $('#button').bind('click', Controller.createNewTodo);
             
            $('#TodoNameInput').bind('keyup', function(e){
                 if(e.keyCode === 13){
            	     Controller.createNewTodo();			
                    }
            
            });
            
            Controller.createStats();
        
	  
	   },
        createNewTodo: function(){
            var todoValue = $('#TodoNameInput').val();
            
            if(todoValue === ""){
                return false;
            }
            else {
                var data = Vrai.Model.Todo.createNewTodo(todoValue);
                var t = new Vrai.View.TodoView(data);
                
                $('#TodoNameInput').val("");
             }
        },
        createStats: function(){
            var data = Vrai.Model.TodoStats.createTodoStats({
                done: 0,
                total: 0
            });
            var t = new Vrai.View.TodoStatsView(data);
            Controller.todoStatsInstance = data;
        },
        removeTodo: function(todo){
            todo.model.remove();
            Controller.updateStats();
        },
        toggleDone: function(todo){
            var done = todo.model.get("done");
            todo.model.set({
                "done": !done
            });	
        },
        editTodo: function(todo){
            var todoValue = todo.model.todo;
             var span = $('.todoText',todo.el)[0];
            
            span.innerHTML = "<input class='editInput' type='text' value='"+todoValue+"'/>";
            
            var input = $('input', span)[0];
            				
            $(input).bind('keyup', function(e){
                if(e.keyCode === 13){
		            var target = e.target || e.srcElement;
                    todo.model.set({
                        "todo": target.value
                    });
                }
            });
            $(input).bind('blur', function(e){
                 var target = e.target || e.srcElement;
                    todo.model.set({
                        "todo": target.value
                    }); 
            });
	     
            input.focus();
        },
        updateStats: function(){
            var doneCounter = 0;
            for(var i=0;i<Vrai.Model.Todo.collection.length;i++){
                Vrai.Model.Todo.collection[i].done===true && doneCounter++;
            }
            Controller.todoStatsInstance.set({
                done: doneCounter,
                total: Vrai.Model.Todo.collection.length
            });
        }
    };

    window.Controller = Controller;

})();
