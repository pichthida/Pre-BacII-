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
         });        
         bacIIView.renderSubject();
      },
      error: function (error) {       
        console.log('error ; ', error);
        }
      });
    },
    fetchYear: function(){      
      $.ajax({
      type: "GET",
      datatype: "JSON",
      url: URL+"/bacii/year_json.php",
      crossDomain: true,
      success: function (years) {
        $.map(years,function(year){
           var jsonYear={
               "id": year.id,
               "year": year.year
           }
           bacIIModel.year.push(jsonYear);
        });        
        bacIIView.renderYear();
      },
      error: function (error) {       
        console.log('error ; ', error);
      }        
      });
    },
    fetchQuestion: function(year){
      Year=year;
      $.ajax({
      type: "GET",
      datatype: "JSON",
      url: URL+"question_json.php",
      crossDomain: true,
      success: function (datas) {                
//        bacIIView.renderQuestion(datas,year);
          bacIIController.filterQuestion(datas);
      },
      error: function (error) {       
        console.log('error ; ', error);
      }        
      });
    },
    fetchAnswer: function(questionID){
      $.ajax({
      type: "GET",
      datatype: "JSON",
      url: URL+"question_json.php",
      crossDomain: true,
      success: function (datas) {
          bacIIController.filterAnswer(datas,questionID);
      },
      error: function (error) {       
        console.log('error ; ', error);
      }        
      });  
    }
}