let tp1 = document.getElementById("span-email");
let tp2 = document.getElementById("span-password");
let tp3 = document.getElementById("span-conf");
let tp4 = document.getElementById("span-first");
let tp5 = document.getElementById("span-last");

let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");

let btn_submit = document.getElementById("gogo");

function check_email(){
    if(this.value==""){
        tp1.style = "visibility: visible";
        tp1.innerText = "This field is required.";
        return false;

    }

    let cnt = 0 ;
    let x = this.value;
    for(let i=0 ; i<x.length ; i++){
        if(x[i] == '@'){
            cnt++;
        }
    }

    if(localStorage.getItem(email.value) !== null){
        tp1.style = "visibility: visible";
        tp1.innerText = "this E-mail is taken";
        e.preventDefault();
        return false;
    }
    if(cnt==1){
        tp1.style = "visibility: hidden";
        return true;

    }
    else{
        tp1.style = "visibility: visible";
        tp1.innerText = "Please enter a valid email address.";
        return false;

    }
   

    
}

function check_password(){
    if(this.value.length<= 5 ){
        tp2.style = "visibility: visible";
        tp2.innerText = "Please enter at least 6 characters.";
        return false;
    }
    else{
        tp2.style = "visibility: hidden";
        return true;
    }
}

function check_conf(){
    if(this.value != password.value  ){
        tp3.style = "visibility: visible";
        tp3.innerText = "Please enter the same value again.";
        return false;
    }
    else{
        tp3.style = "visibility: hidden";
        return true;
    }
}

function is_name(){
    let x = this.value;
    for(let i=0 ; i<x.length ; i++){
        if(isNaN(`${x[i]}`)== false ){
            tp4.style = "visibility: visible";
            tp4.innerText = "Please start with only characters";
            return false;
        }
        else{
            tp4.style = "visibility: hidden";
            return true;
        }
    }
    if(x.length == 0){
        tp4.style = "visibility: visible";
        tp4.innerText = "Please start with only characters";
        return false;
    }
}

function is_name2(){
    let x = this.value;
    for(let i=0 ; i<x.length ; i++){
        if(isNaN(`${x[i]}`)== false){
            tp5.style = "visibility: visible";
            tp5.innerText = "Please start with only characters";
            return false;
        }
        else{
            tp5.style = "visibility: hidden";
            return true;
        }
    }
}

email.addEventListener("blur" , check_email);
password.addEventListener("blur" , check_password);
confirm_password.addEventListener("blur" , check_conf);
// first_name.addEventListener("blur" , is_name);
// last_name.addEventListener("blur" , is_name2);




btn_submit.addEventListener("click" , function(e){
    
    if(email.value==""){
        tp1.style = "visibility: visible";
        tp1.innerText = "This field is required.";
        e.preventDefault();
        return;
    }
    let cnt = 0 ;
    let x = email.value;
    for(let i=0 ; i<x.length ; i++){
        if(x[i] == '@'){
            cnt++;
        }
    }

    if(cnt!=1){
        e.preventDefault();
        return;
    }

    if(localStorage.getItem(email.value) !== null){
        tp1.style = "visibility: visible";
        tp1.innerText = "this E-mail is taken";
        e.preventDefault();
        return;
    }

    if(password.value.length<= 5 ){
        tp2.style = "visibility: visible";
        tp2.innerText = "Please enter at least 6 characters.";
        e.preventDefault();
        return;
    }

    if(confirm_password.value != password.value  ){
        tp3.style = "visibility: visible";
        tp3.innerText = "Please enter the same value again.";
        e.preventDefault();
        return;
    }

    localStorage.setItem( "now" , email.value);
    localStorage.setItem(email.value , password.value);
    
    



    // let xx = first_name.value;
    // for(let i=0 ; i<x.length ; i++){
    //     if(isNaN(`${x[i]}`)== false){
    //         tp4.style = "visibility: visible";
    //         tp4.innerText = "Please start with only characters";
    //         e.preventDefault();
    //         return;
    //     }
    //     else{
    //         tp4.style = "visibility: hidden";
    //     }
    //     if(xx.length == 0){
    //         tp4.style = "visibility: visible";
    //         tp4.innerText = "Please start with only characters";
    //         e.preventDefault();
    //         return false;
    //     }
    // }

    // let y = this.value;
    // for(let i=0 ; i<y.length ; i++){
    //     if(isNaN(`${y[i]}`)== false){
    //         tp5.style = "visibility: visible";
    //         tp5.innerText = "Please start with only characters";
    //         return false;
    //     }
    //     else{
    //         tp5.style = "visibility: hidden";
    //         return true;
    //     }
    // }
    
});


// -----------------------------------------------------------------

function open_sign_in(){
    open("sign_in.html" , "_self");
}
