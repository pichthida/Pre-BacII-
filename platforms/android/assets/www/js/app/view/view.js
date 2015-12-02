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
        console.log(content);
        $("#subject-year").html(content);
        $("#subject-year").trigger('create');
    });
    }
}