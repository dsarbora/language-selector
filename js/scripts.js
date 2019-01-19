$(function(){ //start of ready function
  var phpCounter = 0;
  var javaCounter = 0;
  var cssCounter = 0;
  var cSharpCounter = 0;

  $("#myForm").submit(function(){
    var missingFields = 0;
    var name = $("#yourName").val();
    var technicalLanguage = $("input:radio[name=technicalLanguage]:checked").val();
    var challengeLevel = $("input:radio[name=challengeLevel]:checked").val();
    var logicPreference = $("input:radio[name=logicPreference]:checked").val();
    var companySize = $("input:radio[name=companySize]:checked").val();
    var typeOfPrograms = $("#typeOfPrograms").val();

    if(technicalLanguage == 1) {         //low technical
      cssCounter += 5;
      phpCounter += 3
    }
    else if(technicalLanguage == 2) {   //highly technical
      javaCounter += 5;
      cSharpCounter += 5;
      phpCounter += 3;
    }
    else{
      missingFields += 1
    }

    if(challengeLevel == 1) {         //low challenge
      cssCounter += 5;
      phpCounter += 3;
    }
    else if(challengeLevel ==2) {      //med challenge
      cssCounter += 3;
      phpCounter += 5;
    }
    else if(challengeLevel == 3) {     //high challenge
      cSharpCounter += 5;
      javaCounter += 5;
    }
    else{
      missingFields += 1
    };

    if(logicPreference == 1) {                //front-end
      css += 5;
      php += 4;
    }
    else if(logicPreference == 2) {         //back-end
      javaCounter += 5
      cSharpCounter += 5
    }
    else if(logicPreference == 3) {           //both
      console.log("What a pro")
    }
    else{
      missingFields += 1
    };

    if(companySize == 1) {        //large company
      cSharpCounter += 5;
      javaCounter += 5;
    }
    else if(companySize == 2) {  //startup
      phpCounter += 5;
      javaCounter += 5;
      cssCounter += 3;
    }
    else if(companySize == 3) {    //entrepreneur
      cssCounter += 6;
      phpCounter +=5;
      javaCounter += 4;
    }
    else {
      missingFields += 1
    };

    if(typeOfPrograms == 1) {                       //typeOfPrograms games
      cSharpCounter += 5;
      phpCounter += 3;
    }
    else if(typeOfPrograms == 2) {    //phone apps
      javaCounter += 5
    }
    else if(typeOfPrograms == 3) {    //websites
      cssCounter += 5
      phpCounter += 5
    }
    else if(typeOfPrograms == 4) {    //backend development
      javaCounter += 5
      cSharpCounter += 5
    }
    else if(typeOfPrograms == 5) {    //Everything
      console.log("Renaissance person over here")
        }
    else {
      missingFields += 1
    };
    if(missingFields == 1) {
    alert("You didn't answer one of the questions")
    }
    else if(missingFields > 0) {
      alert("Go back and answer the other " + missingFields + " questions!")
    }
    else if(missingFields == 5){
      alert("You didn't answer a single question! Get your head in the game!")
    }
    else if(cssCounter >= phpCounter && cssCounter >= javaCounter && cssCounter >= cSharpCounter) {
      $("#css").show();
      $("#myForm").hide();
    }
    else if(javaCounter >= cSharpCounter && javaCounter >= phpCounter) {
      $("#java").show();
      $("#myForm").hide();
    }
    else if(cSharpCounter >= phpCounter) {
      $("#cSharp").show();
      $("#myForm").hide();
    }
    else{
      $("#phpCounter").show();
      $("#myForm").hide();
    }

    event.preventDefault();

  }); //end submit function
}); //end of ready function
