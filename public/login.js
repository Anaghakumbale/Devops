

function validateForm() {
    var x = document.forms["form"]["Student name"].value;
    
    
    var a = document.forms["form"]["password"].value;
   
    if (x == "" || x == null) {
      alert("Please fill the name");
      return false;
    }
   
         if (a == "" || x == null) {
           alert("Please enter password ");
           return false;
         }
    else{
        setTimeout(function() {window.location = "studentdash.html" });
    }
         
  }