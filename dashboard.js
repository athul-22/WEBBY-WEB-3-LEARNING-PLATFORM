function dashLoad(){
    var name_value = localStorage.getItem("nameDB");
    var email_value = localStorage.getItem("emailDB");

    var name = document.getElementById("name");
    var email = document.getElementById("email");

    name.innerHTML = name_value;
    email.innerHTML = email_value;

    console.log(name_value);
    console.log(email_value);

    // GETTING PROFILE LOCALSTORAGE

 
    var profile_DB = localStorage.getItem("profileDB");

    console.log(localStorage.getItem("profileDB"));
    console.log(profile_DB);


    if(profile_DB == "man"){
        document.getElementsByClassName("profile_img").src = "MAN_1.png";
    }else{
        document.getElementsByClassName("profile_img").src = 'WOMEN_1.png';
    }
}


function manFun(){
    var profile_img = document.getElementById("profile_img");
    var man = document.getElementById("man");
    var profileDB = localStorage.setItem("profileDB", "man");

    document.getElementsByClassName("profile_img").src = 'MAN_1.png';

}

function womenFun(){
    var profile_img = document.getElementById("profile_img");
    var man = document.getElementById("women");
    var profileDB = localStorage.setItem("profileDB", "women")

    document.getElementsByClassName("profile_img").src = 'WOMEN_1.png';
}