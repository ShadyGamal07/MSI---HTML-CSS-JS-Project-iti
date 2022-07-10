let email = document.getElementById("email");
let password = document.getElementById("password");
let span_message = document.getElementById("span-message");

let btn_submit = document.getElementById("gogo");





btn_submit.addEventListener("click" , function(e){
   

    if(localStorage.getItem(email.value) === null){
        span_message.innerText = "Email or password or both is Wrong";
        span_message.style = "visibility: visible";
        e.preventDefault();
    }else{
        span_message.style = "visibility: hidden";
    }

    if(localStorage.getItem(email.value) != password.value){
        span_message.innerText = "Email or password or both is Wrong";
        span_message.style = "visibility: visible";
        e.preventDefault();
    }

    if(localStorage.getItem(email.value) !== null && password.value == localStorage.getItem(email.value)){
        localStorage.setItem("now" , email.value);
    }





    // if(localStorage.getItem(`${email.Value}`) != password.Value){
    //     span_message.innerText = "Email or password or both is Wrong";
    //     span_message.display = "visibility: visible";
    //     e.preventDefault();
    // }
    // else{
    //     span_message.display = "visibility: hidden";
    //     e.preventDefault();
    // }
})
