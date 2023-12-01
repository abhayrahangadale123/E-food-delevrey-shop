   let submit = document.querySelector("#submit");
   let NAME = document.querySelector("#name")
   let EMAIL = document.querySelector("#email")
   let PASSWORD = document.querySelector("#password")
   
function login(){
   submit.addEventListener("click",
      function(){
          if(NAME.value == ""){
             alert("enter the name")
           }
          else if(EMAIL.value==""){
              alert("enter the email")
      
           }
          else if(PASSWORD.value==""){
             alert("enter the password")
           }
          else if(PASSWORD.value.length<6){
             alert("password length is less then 6")
            }
            
           else{
             alert(NAME.value + " ..Thankyou")
             console.log(NAME.value == "");
        }
    })

}
login()
 


/*************************************************************** */
 function ICE_CREAME(){        
let more = document.querySelector("#button_card")
let ice444 = document.querySelector("#icecreme_4")
let ice_hide = document.querySelector(".ice_hide")
let all_ice_hidden= document.querySelector(".all_ice_hidden")
let back = document.querySelector("#back")

more.addEventListener("click",function(){
    ice_hide.style.display = "block"
    
    ice_hide.style.display = "flex"
    ice_hide.style.flexWrap ="wrap"
    ice444.style.display = "flex"

    all_ice_hidden.style.display="grid";
    all_ice_hidden.style.gridTemplateColumns =" repeat(2,1fr)"
})
back.addEventListener("click",function(){
    ice_hide.style.display = "none"
    
})
}
     ICE_CREAME();


     function cake(){
let more = document.querySelector(".cake")
let CAKE = document.querySelector("#CAKE_4")
let ice_hide = document.querySelector(".ice_hide")
let all_ice_hidden= document.querySelector(".all_ice_hidden")
let back = document.querySelector("#back")

more.addEventListener("click",function(){
    ice_hide.style.display = "block"
    
    ice_hide.style.display = "flex"
    ice_hide.style.flexWrap ="wrap"
    CAKE.style.display = "flex"

    all_ice_hidden.style.display="grid";
    all_ice_hidden.style.gridTemplateColumns =" repeat(2,1fr)"
})
back.addEventListener("click",function(){
    ice_hide.style.display = "none"
    
})
     }
     cake();

 
    


  