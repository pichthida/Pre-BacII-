bacIIView={
    renderSubject: function(){
      var subjects=bacIIModel.getSubject(); 
      console.log(subjects);
        AppTemplate.process("subject-list.html", {subjects: subjects}, function (content) {
//        console.log(content);
        $("#sub-list").html(content);
        $("#sub-list").trigger('create');
      }); 
    },
    renderYear: function(){
        var years=bacIIModel.getYear();        
        AppTemplate.process("subject-year.html", {years: years}, function (content) {
//        console.log(content);
        $("#subject-year").html(content);
        $("#subject-year").trigger('create');
    });
    },
    renderQuestion: function(datas){               
        AppTemplate.process("question-list.html", {datas: datas}, function (content) {
//        console.log(content);
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