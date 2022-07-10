

export function m1(){

    let image_user = document.getElementById("user");
    let span_user = document.getElementById("user_");
    let sign_out = document.getElementById("signout");

    if (localStorage.getItem('now') !== null && localStorage.getItem('now')!="" ) {
        span_user.innerText = localStorage.getItem("now");
        span_user.style = "visibility: visible";
        image_user.style = "visibility: hidden";
        sign_out.style = "display : inline-block";
    } else {
        localStorage.setItem("now" , "");
        image_user.style = "visibility: visible";
        span_user.style = "visibility: hidden";
    }


    sign_out.addEventListener("click" , sign_out_user);
    
}

function sign_out_user(){
    localStorage.setItem("now" , "");
    open("index.html" , "_self");
}