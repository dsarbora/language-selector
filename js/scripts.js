$(function(){ //start of ready function
  var phpCounter = 0;
  var javaCounter = 0;
  var cssCounter = 0;
  var cSharpCounter = 0;

  $("#myForm").submit(function(){
    var technicalLanguage = $("input:radio[name=technicalLanguage]:checked").val();
    alert(technicalLanguage);

  }); //end submit function
}); //end of ready function
