

function validateForm() {
    var x = document.forms["myform"]["help"].value;
    var y = document.forms["myform"]["name"].value;
    var z = document.forms["myform"]["email"].value;
    var a = document.forms["myform"]["details"].value;
    
    if (x == "" || x == null) {
      alert("Please fill every field.");
      return false;
    }
    if (y == "" || x == null) {
           alert("Please fill every field.");
           return false;
         }
         if (z == "" || x == null) {
           alert("Please fill every field.");
           return false;
         }
         if (a == "" || x == null) {
           alert("Please fill every field.");
           return false;
         }
         else{
             alert("Submitted succesfully!");
             setTimeout(function() {window.location = "studentdash.html" });
         }
        
  }