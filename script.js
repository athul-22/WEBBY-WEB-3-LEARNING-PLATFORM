function mainFun(){
    //ELEMENTS
    var dashboard = document.getElementById("dashboard");
    var signin_button = document.getElementsByClassName("signin-button");
    var mainDB = localStorage.getItem("nameDB");
    var primary = document.getElementsByClassName("primary");
    console.log(mainDB);

    // SIGNIN - DASHBOARD TEXT CHANGE
    if(mainDB == null){
        dashboard.innerHTML = "SIGNIN";
        $(".primary").html("SIGN IN");

            // SIGNIN BUTTON CLICK TO POPUP
            $('#dashboard').on('click', function() {
            $(".custom-model-main-1").addClass('model-open-1');
              }); 

            // PRIMARY BUTTON CLICK TO POPUP 
             $('.primary').on('click', function() {
            $(".custom-model-main-1").addClass('model-open-1');
              }); 
            // CLOSING BUTTTON 
             $(".close-btn-1, .bg-overlay-1").click(function(){
             $(".custom-model-main-1").removeClass('model-open-1');
            });
    }
    else{
        dashboard.innerHTML = "DASHBOARD"; 
        window.open("dashboard.html");
        $('.primary').on('click', function(){
          window.open("dashboard.html");
        });
        //
    }
}

  function topSignin(){
    var dashboardBtn = document.getElementById("dashboard");

    if(dashboardBtn.innerHTML == "SIGNIN"){
            // SIGNIN BUTTON CLICK TO POPUP
            $('#dashboard').on('click', function() {
            $(".custom-model-main-1").addClass('model-open-1');
              }); 
            // PRIMARY BUTTON CLICK TO POPUP 
             $('.primary').on('click', function() {
            $(".custom-model-main-1").addClass('model-open-1');
              }); 
            //  CLOSING BUTTTON 
             $(".close-btn-1, .bg-overlay-1").click(function(){
             $(".custom-model-main-1").removeClass('model-open-1');
            });
    }
    else{
        window.open("dashboard.html");
    }
  }

// SIGNIN DATA STORE FUNCTION

function storeData(){
    var name_value = document.getElementById("name").value;
    var email_value = document.getElementById("email").value;

    localStorage.setItem("nameDB", name_value);  
    localStorage.setItem("emailDB", email_value);  

    var n = localStorage.getItem("nameDB");

    console.log(n);
    console.log(emailDB);
}

