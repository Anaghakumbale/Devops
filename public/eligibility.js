

function validateForm() {
    var x = document.forms["form"]["name"].value;
    var y = document.forms["form"]["Email ID"].value;
    var z = document.forms["form"]["grade1"].value;
    var a = document.forms["form"]["grade2"].value;
    var b = document.forms["form"]["Annual income"].value;
    if (x == "" || x == null) {
      alert("Please fill the form completely!");
      return false;
    }
    if (y == "" || x == null) {
           alert("Please fill the form completely!");
           return false;
         }
         if (z == "" || x == null) {
           alert("Please fill the form completely!");
           return false;
         }
         if (a == "" || x == null) {
           alert("Please fill the form completely!");
           return false;
         }
         if (b == "" || x == null) {
           alert("Please fill the form completely!");
           return false;
         }
         
        else{
         setTimeout(function() {window.location = "aftereligibility.html" });
        } 
  }