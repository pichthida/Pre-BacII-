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
      url: URL+"/bacii/subject_json.php",
      crossDomain: true,
      success: function (datas) {
         $.map(datas,function(data){
            var jsondata= {
                "id" : data.id,
                "name" : data.name,
                "image" : data.image
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
    }
}