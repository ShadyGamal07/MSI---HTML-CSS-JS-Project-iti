

window.addEventListener("load" , main);

function main(){
  sign_out.addEventListener("click" , sign_out_user);
}


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



// ----------------------------------------------------------------------


let stop = document.getElementById("stop");
let count = document.getElementById("countp1");


count.addEventListener("blur" , function(){
  if(this.value == ""){
    stop.innerHTML="This Field is Required";
  }
});




let main_button = document.getElementById("btnp1");





function gooo(e){

  if(localStorage.getItem("now") == ""){
    stop.innerHTML="please Sign in ";
    e.preventDefault();
  }
  
  if(countp1.value == ""){
    stop.innerHTML="This Field is Required";
    e.preventDefault();
  }
  

  if(isNaN(countp1.value) == true ){
    stop.innerHTML="please Enter only Nums";
    e.preventDefault();
  }

  let ttt = parseInt(countp1.value) ;
  if(ttt <= 0){
    stop.innerHTML="please Enter positive Nums";
    e.preventDefault();
  }
  

  new_obj = {

    Name : namep1.value,
    price : pricep1.value ,
    count : ttt
  }

    console.log(new_obj);
    console.log("the length of Local Storage : " , localStorage.length);

    let count = 0;

    for(let i=0 ;i<localStorage.length ; i++){
      if(isNaN(localStorage.key(i))  == true){
        continue;
      }
      else{
        count++;
      }
    }

    

    localStorage.setItem( (count + 1).toString() , JSON.stringify(new_obj));
    child = open("card.html" ,"_self");

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