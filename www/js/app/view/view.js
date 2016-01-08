bacIIView={
    renderSubject: function(subjects){
//      var subjects=bacIIModel.getSubject();
        AppTemplate.process("subject-list.html", {subjects: subjects}, function (content) {
        $("#sub-list").html(content);
        $("#sub-list").trigger('create');
        bacIIModel.subject=[];
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
        $("#question-title").html(Subject+" - "+Year);
        bacIIController.question=[];
    });
    },
    renderAnswer: function(datas){
        AppTemplate.process("Answer.html", {datas: datas}, function (content) {
        $("#answer").html(content);
        $("#answer").trigger('create');
        $("#answer-title").html(Subject+" - "+Year);
        bacIIController.answer=[];
    });
    }
}