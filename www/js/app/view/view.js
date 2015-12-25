bacIIView={
    renderSubject: function(){
      var subjects=bacIIModel.getSubject(); 
        AppTemplate.process("subject-list.html", {subjects: subjects}, function (content) {
        $("#sub-list").html(content);
        $("#sub-list").trigger('create') ;
      }); 
    },
    renderYear: function(){
        var years=bacIIModel.getYear();        
        AppTemplate.process("subject-year.html", {years: years}, function (content) {
        $("#subject-year").html(content);
        $("#subject-year").trigger('create');
    });
    },
    renderQuestion: function(datas){               
        AppTemplate.process("question-list.html", {datas: datas}, function (content) {
        $("#question-list").html(content);
        $("#question-list").trigger('create');
        $("#question-title").html(Subject);
        bacIIController.question=[];
    });
    },
    renderAnswer: function(datas){
        AppTemplate.process("Answer.html", {datas: datas}, function (content) {
        $("#answer").html(content);
        $("#answer").trigger('create');
//        $("#title").html(Subject);
        bacIIController.answer=[];
    });
    }
}