

function validateForm() {
       var x = document.forms["myform"]["Scholarship name"].value;
       var y = document.forms["myform"]["Scholarship amount"].value;
       var z = document.forms["myform"]["Eligibility criteria"].value;
       var a = document.forms["myform"]["Required documents"].value;
       
       if (x == "" || x == null) {
         alert("Please fill the name");
         return false;
       }
       if (y == "" || x == null) {
              alert("Please enter amount");
              return false;
            }
            if (z == "" || x == null) {
              alert("Please fill eligibility criteria");
              return false;
            }
            if (a == "" || x == null) {
              alert("Please mention required documents ");
              return false;
            }
            else{
                alert("Added succesfully!");
                setTimeout(function() {window.location = "addadmin.html" });
            }
           
     }