var bacIIController ={
    question:[],
    answer:[],
    setSubjectName: function(id){
        if (id=='1'){
            Subject="Chemistry";
            SubjectID=id;
        }else if (id=='2'){
            Subject="Biology";
            SubjectID=id;
        }
        $("#subject").html("<b>"+Subject+"</b>");
    },
    filterQuestion: function(datas){        
        $.map(datas,function(data){
           if(data.subject_id==SubjectID && data.year==Year){
               var jsonquestion={
                   "id": data.id,
                   "question":data.question
               }
               bacIIController.question.push(jsonquestion);
           }
           bacIIView.renderQuestion(bacIIController.question);
        });
    },
    filterAnswer: function(datas,questionID){
       $.map(datas,function(data){
               if(data.subject_id==SubjectID && data.year==Year && questionID==data.id){
                   var jsonAnswer={
                       "question":data.question,
                       "answer":data.answer
                   }
                   bacIIController.answer.push(jsonAnswer);
               }
           bacIIView.renderAnswer(bacIIController.answer);
        }); 
    }
}
