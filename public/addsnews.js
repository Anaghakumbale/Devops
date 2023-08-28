

function validateForm() {
    var x = document.forms["myform"]["News"].value;
    
    
    
    if (x == "" || x == null) {
      alert("News can't be empty!");
      return false;
    }
    
         
         else{
             alert("Added succesfully!");
             setTimeout(function() {window.location = "addsnews.html" });
         }
        
  }