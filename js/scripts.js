$(function(){ //start of ready function
  var phpCounter = 0;
  var javaCounter = 0;
  var cssCounter = 0;
  var cSharpCounter = 0;

  $("#myForm").submit(function(){
    debugger;
    var technicalLanguage = $("input:radio[name=technicalLanguage]:checked").val();
    var challengeLevel = $("input:radio[name=challengeLevel]:checked").val();
    var logicPreference = $("input:radio[name=logicPreference]:checked").val();
    var companySize = $("input:radio[name=companySize]:checked").val();
    var typeOfPrograms = $("#typeOfPrograms").val();
    if(technicalLanguage == 1) {                        //technicalLanguage if 1, 2, else
      cssCounter += 5;
      phpCounter += 3
    }
    else if(technicalLanguage == 2) {
      javaCounter += 5;
      cSharpCounter += 5;
      phpCounter += 3;
    }
    else{
      alert("Please fill all fields")
    }
alert(cssCounter);
    if(challengeLevel == 1) {                       //low challenge
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
      alert("Please fill out all fields")
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
      var fullStack = "Programming is a powerful tool for both front and back end. You should look into picking up a complementary language so you can work on both!";
      $("#fullStack").text(fullStack);
    }
    else{
      alert("Please fill out all fields")
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
      alert("Please fill out all fields")
    };

    if(typeOfPrograms == 1) {                       //typeOfPrograms games
      cSharpCounter += 5;
      phpCounter += 3;
      

    }
    else if(typeOfPrograms == 2) {    //phone apps
    }
    else if(typeOfPrograms == 3) {    //websites
    }
    else if(typeOfPrograms == 4) {    //backend development
    }
    else if(typeOfPrograms == 5) {    //Everything
    }
    else {
      alert("Please fill out all fields")
    };


  }); //end submit function
}); //end of ready function
