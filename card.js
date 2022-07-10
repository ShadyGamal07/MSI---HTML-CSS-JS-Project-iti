

window.addEventListener("load" , main);

function main(){


    let card = document.getElementById("card"); // Container of Table 
    let if_no_items =document.getElementById("if_no_items");

    let count = 0;

    for(let i=0 ;i<localStorage.length ; i++){
      if(isNaN(localStorage.key(i))  == true){
        continue;
      }
      else{
        count++;
      }
    }
    
    console.log( localStorage);
    console.log("the count is " , count);

    // card.style.display = "hidden";

    if(count > 0){

        let trh = document.createElement('tr');
        let tdsh = `<th> # </th> <th>Product Name</th> <th>Price </th> <th>Count</th> <th>Action </th>`;
        trh.innerHTML += tdsh;
        tbl.appendChild(trh);

        for(let i=0 ; i<localStorage.length ; i++){
            if(isNaN(localStorage.key(i))  == true){
                continue;
            }

            let tr_element = document.createElement("tr");
            // tr_element.className = "row";

            let product = JSON.parse( localStorage.getItem(localStorage.key(i))); // Obj 


            //Arr[0] = 5

            console.log(product);

            let f = document.createElement("td");
            let ff = document.createTextNode(localStorage.key(i));
            f.append(ff);
            tr_element.append(f);

            for (const key in product) {
                let tp = document.createElement("td");
                
                let content = document.createTextNode(product[key]);
                tp.appendChild(content);
                tr_element.appendChild(tp);

                
            }
            let btnn = document.createElement("button");
            let txt = document.createTextNode("Delete");

            btnn.appendChild(txt);

            btnn.className = "delete";

            tr_element.appendChild(btnn);
            tbl.append(tr_element);
        }
    }
    else if(count == 0){
       
        let sub =document.getElementById("sub-final");
        if_no_items.style = "display : block";
        sub.style = "display : none";
    }

    card.addEventListener("click" , d);




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

// function d(eo){
//     if(eo.target.className == "delete"){

//         let tpp = (eo.target.parentElement.innerText).toString();

//         console.log("The inner Text :" , tpp);
//         let num = new String;
//         let temp = new String;

//         console.log(num);
//         for(let i=0 ; i<tpp.length ; i++){
//             if(tpp[i] == " " || tpp[i] == "  " || tpp[i]=="   " || tpp=="    " || tpp== "\r"){
//                 console.log(i);
//                 break;
//             }
//             else{
//                 temp+=tpp[i];
//             }
//         }
//         console.log(`do00000000000000${temp}ne`);

//         for(let i=0 ; i<tpp.length ; i++){
//             if(tpp==' '){
//                 continue;
//             }
//             if(isNaN(tpp[i]) == false) {
//                 console.log(`Ya rap${tpp[i]}`);
//                 num+=tpp[i];
//             }
//             else{
//                 break;
//             }
//         }
        
//         console.log("the num = the first num in inner text"   ,  `${num}`);
        
//         console.log("The length of Local is :" ,localStorage.length);

//         for(let i=0 ; i<localStorage.length ; i++){
//             console.log(`${num}vs${localStorage.key(i)}`);
//             if(num == localStorage.key(i)){
//                 console.log("A7777A");
//                 console.log(localStorage.key(i));
//             }
//         }
//         console.log("----------------------------");

//         window.localStorage.removeItem(num);

//         console.log("---------------  after  -------------");


//         console.log("The length of Local is :" ,localStorage.length);

//         for(let i=0 ; i<localStorage.length ; i++){
//             console.log(`The key of Element num ${i+1}` ,localStorage.key(i));
//         }


//         eo.target.parentElement.remove();
//     }
// }

function d(e){
    if(e.target.className == "delete"){
        // console.log(e.target.parentElement.innerText.split("\t"));
        
        let tp = e.target.parentElement.innerText.split("\t")[0];
        console.log(`---${tp}---`);

        e.target.parentElement.remove();

        localStorage.removeItem(tp);


        
        for(let i=0 ;i<localStorage.length ; i++){
            let n = 1;
            if(isNaN(localStorage.key(i))  == true){
                console.log("not valid");
              continue;
            }
            else{
                let o = new Object;
                o = JSON.parse(localStorage.getItem(localStorage.key(i)));
                localStorage.removeItem(localStorage.key(i));
                
                
                while(localStorage.getItem(n) !== null){
                    n++;
                }


                localStorage.setItem(n , JSON.stringify(o));
                
            }

        }

        open("card.html" , "_self");

    }
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
    console.log("aaaaaaaa77");
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