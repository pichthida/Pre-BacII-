var bacIIModel ={
    subject:[],
    year:[],
    getYear: function(){
      return bacIIModel.year;  
    },
    getSubject:function(){
      return bacIIModel.subject; 
    },
    fetchSubject: function(){
      $.ajax({
      type: "GET",
      datatype: "JSON",
      url: URL+"subject_json.php",
      crossDomain: true,
      success: function (datas) {
           var c="";
         $.map(datas,function(data){
            if(data.id%2==0){
                c="ui-block-b";
            }else{
                c="ui-block-a";
            }
            var jsondata= {
                "id" : data.id,
                "name" : data.name,
                "image" : data.image,
                "block" : c
            };
            bacIIModel.subject.push(jsondata);
//              bacIIView.renderSubject(jsondata);
         });        
         bacIIView.renderSubject(bacIIModel.subject);
      },
      error: function (error) {       
        console.log('error ; ', error);
        }
      });
    },
    fetchQuestion: function(year){
      $("#loading").show();
      Year=year;
      $.ajax({
      type: "GET",
      datatype: "JSON",
      url: URL+"question_json.php",
      crossDomain: true,
      success: function (datas) {              
         $("#loading").hide();
//        bacIIView.renderQuestion(datas,year);
          bacIIController.filterQuestion(datas);
      },
      error: function (error) {       
        console.log('error ; ', error);
      }        
      });
    },
    fetchAnswer: function(questionID){ 
      $("#loading1").show();
      $.ajax({
      type: "GET",
      datatype: "JSON",
      url: URL+"question_json.php",
      crossDomain: true,
      success: function (datas) {
          $("#loading1").hide();
          bacIIController.filterAnswer(datas,questionID);
      },
      error: function (error) {       
        console.log('error ; ', error);
      }        
      });  
    }
}