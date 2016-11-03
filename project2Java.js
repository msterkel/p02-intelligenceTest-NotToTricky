// Matt Sterkel

var score1 =0;
var score2 =0;
var score3 =0;
function test1(){
 var answer = document.getElementById("input1").value;
 if( Number(answer)){
  if(answer == 142842){
document.getElementById("congrats").innerHTML =
"Congrats, you're correct!";
 document.getElementById("congrats").classList.remove("hidden-message");
  document.getElementById("congrats").classList.add("shown-message");
score1 = score1 +1;
 setCookie("result",score1,1);
console.log("score is now"+ score1);
  }
   else if(answer < 142842){
  document.getElementById("congrats").innerHTML =
   "Not quite my friend...";
    document.getElementById("congrats").classList.remove("hidden-message");
     document.getElementById("congrats").classList.add("shown-message");
  }
   else if(answer > 142842){
  document.getElementById("congrats").innerHTML =
  "Try again please";
   document.getElementById("congrats").classList.remove("hidden-message");
    document.getElementById("congrats").classList.add("shown-message");
   }
 }
else {
 document.getElementById("congrats").classList.remove("shown-message");
  window.alert("Please use numerals ony, no letters.")
}
}

function test2(){
  var answer2 = document.getElementById("input2").value;
   answer2 =answer2.toLowerCase();
   if( isNaN(answer2) ){

    if(answer2 == "code block"){
      document.getElementById("congrats2").innerHTML = "Right you are.";
      document.getElementById("congrats2").classList.add("shown-message");
      document.getElementById("congrats2").classList.remove("hidden-message");
      score2 = score2 +1;
       setCookie("result2",score2,1);
       console.log("score is now"+ score2);
    }

     else if(answer2 != "code block"){
      document.getElementById("congrats2").innerHTML =
      "Rethink your answer..";
      document.getElementById("congrats2").classList.add("shown-message");
    }
  }

  else {
    document.getElementById("congrats2").classList.remove("shown-message")
    window.alert("No numbers may be entered, only letters.")
  }
}

function test3(){
  var answer3 = document.getElementById("input3").value;
   if(Number(answer3)){
    if(answer3 == 15225223){
    document.getElementById("congrats3").innerHTML =
     "You got it!"
     score3 = score3 +1;
      setCookie("result3",score3,1);
      console.log("score is now"+ score3);
    }
     else if( answer3 > 15225223){
    document.getElementById("congrats3").innerHTML =
    "Nope"
     }
      else if( answer3 < 15225223){
      document.getElementById("congrats3").innerHTML =
      "Try again..."
      }
   }
  else {
   document.getElementById("congrats3").classList.remove("shown-message")
    window.alert("Please use numerals ony, no letters.")
  }
}

function clearInput(){
  document.getElementById("congrats").innerHTML="";
}
function clearInput2(){
  document.getElementById("congrats2").innerHTML="";
}
function clearInput3(){
 document.getElementById("congrats3").innerHTML="";
}

function asPercent(val)
{
  return   val.toFixed(2) * 100 + "%";
}

function calculateResults(){
  console.log("Result is " + getCookie("result"));
  console.log("Result2 is " + getCookie("result2"));
  console.log("Result3 is " + getCookie("result3"));
 var scores = Number(getCookie("result")) + Number(getCookie("result2"))+ Number(getCookie("result3"));
  var percentage = scores/3;
  document.getElementById("finalScore").innerHTML = asPercent(percentage);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
