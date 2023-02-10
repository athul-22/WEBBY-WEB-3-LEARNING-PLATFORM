function mainFun(){
    //ELEMENTS
    var dashboard = document.getElementById("dashboard");
    var signin_button = document.getElementsByClassName("signin-button");

    var mainDB = localStorage.getItem("nameDB");

    console.log(mainDB);

    // SIGNIN - DASHBOARD TEXT CHANGE
    if(mainDB == null){
        dashboard.innerHTML = "SIGNIN";
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
        dashboard.innerHTML = "DASHBOARD";
        window.open("dashboard.html")
    }
}

    if(mainDB != null){

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