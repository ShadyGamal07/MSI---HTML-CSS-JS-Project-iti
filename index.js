// import  ans  from './modules/base.js';

window.addEventListener("load" , main);

function main(){

  // console.log(ans);

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


function no_nums(){
    for(let i=0 ; i<localStorage.length ; i++){
      if(isNaN(localStorage.key(i)) === false){
        return true;
      }
    }
    return false;
  }
  
  function sign_out_user(){
    while(no_nums() == true){
        for(let i=0 ; i<localStorage.length ; i++){
            if(isNaN(localStorage.key(i)) == false){
                localStorage.removeItem(localStorage.key(i));
           }
        }
    }
    localStorage.setItem("now" , "");
  
    open("index.html" , "_self");
  }



// function no_nums(){
//     for(let i=0 ; i<localStorage.length ; i++){
//       if(isNaN(localStorage.key(i)) === false){
//         return true;
//       }
//     }
//     return false;
//   }

// function sign_out_user(){
//     // let arr = new Array;
//     // let q = localStorage.getItem("now");
//     // q+= "+";

//     while(no_nums() === true){
//         for(let i=0 ; i<localStorage.length ; i++){
//             if(isNaN(localStorage.key(i)) === false){
                
//                 // let w = new Object;
//                 // w =  JSON.parse(  localStorage.getItem(localStorage.key(i))  ) ;
                
//                 // console.log(q,w);
//                 // console.log(w);

//                 // console.log(typeof q);
//                 // console.log(typeof w);

//                 // localStorage.setItem(q,JSON.stringify(w));

//                 localStorage.removeItem(localStorage.key(i));
                
//            }
//         }
//     }
    
//     e();
//     open("index.html" , "_self");
// }

// function e(){
//     localStorage.setItem("now" , "");
// }
