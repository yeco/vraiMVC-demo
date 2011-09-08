(function(){

    /**
     * TodoStats View
     */
    var TodoStatsView = new Vrai.View("TodoStatsView", {
        template: new EJS({
            url: './view/TodoStats.ejs'
        }),
        container: document.getElementById('todoDoneContainer'),
        tag: "div"
    });
    
    window.TodoStatsView = TodoStatsView;

})();
