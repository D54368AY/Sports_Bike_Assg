 $(document).ready(function () { 
    $('.parallax').parallax();
    $(".sidenav").sidenav();
    $(".slider").slider();
    $(".mycars").carousel({    
       shift : 50
    });
})


    

function validate(){
   
   var f_name=document.getElementById("fname");
   var errnode1=document.getElementById("error1");
   
   
   var l_name=document.getElementById("lname");
   var errnode2=document.getElementById("error2");
   
   
   var mailnode=document.getElementById("mailid");
   var errnode3=document.getElementById("error3");
   
   
   
   var sub=document.getElementById("subject");
   var errnode4=document.getElementById("error4");

   var success=document.getElementById("success");
   
      var expName=/^[a-zA-Z]{2,100}$/;
      var expMail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var exparea=/^[a-zA-Z ]{20,200}$/;
   
   
      if(document.getElementById("fname").value=="" || document.getElementById("fname").value.length <= 5 )
      {
          document.getElementById("fname").focus();
          errnode1.innerHTML="more than 5 character allowed";
          errnode1.className="alert alert-danger";
          return false;
      }
      else if(document.getElementById("lname").value=="" || document.getElementById("lname").value.length <= 5 )
      {
          document.getElementById("lname").focus();
          errnode2.innerHTML="more than 5 character(no numbers allowed)";
          errnode2.className="alert alert-danger";
          return false;
      }
      else if(!(expMail.test(document.getElementById("mailid").value))){
          
          document.getElementById("mailid").focus();
          errnode3.innerHTML="Enter Valid Email";
          errnode3.className="alert alert-danger"; 
          return false; 
      }
      else if(document.getElementById("subject").value.length <= 19){
         
          document.getElementById("subject").focus();
          errnode4.innerHTML="Enter minimum 20 letters";
          errnode4.className="alert alert-danger";
          return false;
      }
      
      else 
      {
         errnode1.className="col-md-12 mt-3 text-left";
          errnode1.innerHTML=("");
         errnode2.className="col-md-12 mt-3 text-left";
          errnode2.innerHTML=("");
          errnode3.className="col-md-12 mt-3 text-left";
          errnode3.innerHTML=("");
          errnode4.className="col-md-12 mt-3 text-left";
          errnode4.innerHTML=("");
           success.innerHTML="Registration Successfully";
          success.className="alert alert-success"; 
         alert("We'll Get back to you Soon")
          window.location.href="product.html";
          return true;
      }
   }
     
  