

function validateForm() {
       var x = document.forms["form"]["Student name"].value;
       var y = document.forms["form"]["Email Id"].value;
       var z = document.forms["form"]["Phone number"].value;
       var a = document.forms["form"]["password"].value;
       var b = document.forms["form"]["Confirm password"].value;
       if (x == "" || x == null) {
         alert("Please fill the name");
         return false;
       }
       if (y == "" || x == null) {
              alert("Please enter email id");
              return false;
            }
            if (z == "" || x == null) {
              alert("Please enter phone number");
              return false;
            }
            if (a == "" || x == null) {
              alert("Please enter password ");
              return false;
            }
            if (b == "" || x == null) {
              alert("Please confirm password");
              return false;
            }
            if(a!=b){
              alert("Password does not match!");
            }
           else{
            setTimeout(function() {window.location = "afterreg.html" });
           } 
     }