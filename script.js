function mainFun(){
    //ELEMENTS
    var dashboard = document.getElementById("dashboard");
    
    var mainDB = localStorage.getItem(mainDB);
    console.log(mainDB);

    // SIGNIN / DASHBOARD TEXT CHANGE
    if(mainDB == null){
        dashboard.innerHTML = "SIGNIN";
    }
    else{
        dashboard.innerHTML = "DASHBOARD"
    }
}