var home = document.getElementById("home");
var content = document.getElementsByClassName("content-main");
var contact = document.getElementsByClassName("contact");
var settings = document.getElementsByClassName("settings");


$(contentFun(){
    $("li").on("click",function() {
      alert("welome");
    });
  });

function contentFun(){
    alert("clcked");

    //CALLING EACH ELEMENT INTO FUNCTION
    var home = document.getElementById("home");
    var content = document.getElementsByClassName("content-main");
    var contact = document.getElementsByClassName("contact");
    var settings = document.getElementsByClassName("settings");



    // HIDDEN ELEMENTS
    
    content.style.visibility = "hidden";
    contact.style.visibility = "hidden";
    settings.style.visibility = "hidden";

    //VISIBLE ELEMENTS
    home.style.visibility = "visible";
}



function contentFun(){
    //CALLING EACH ELEMENT INTO FUNCTION
    var home = document.getElementById("home");
    var content = document.getElementsByClassName("content-main");
    var contact = document.getElementsByClassName("contact");
    var settings = document.getElementsByClassName("settings");

    // HIDDEN ELEMENTS
    

    //VISIBLE ELEMENTS
}




function contactFun(){
    //CALLING EACH ELEMENT INTO FUNCTION
    var home = document.getElementById("home");
    var content = document.getElementsByClassName("content-main");
    var contact = document.getElementsByClassName("contact");
    var settings = document.getElementsByClassName("settings");

    // HIDDEN ELEMENTS
    content.style.visibility = "hidden";
    home.style.visibility = "hidden";
    settings.style.visibility = "hidden";

    //VISIBLE ELEMENTS
    contact.style.visibility = "hidden";
}




function settingsFun(){
    //CALLING EACH ELEMENT INTO FUNCTION
    var home = document.getElementById("home");
    var content = document.getElementsByClassName("content-main");
    var contact = document.getElementsByClassName("contact");
    var settings = document.getElementsByClassName("settings");

    // HIDDEN ELEMENTS
    

    //VISIBLE ELEMENTS
}

