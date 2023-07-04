const sections=document.querySelectorAll(".section");
const sectBtns=document.querySelectorAll(".controls");
const sectBtn=document.querySelectorAll(".control");
const allSections=document.querySelector(".main-content");

function PageTransitions(){
    for (let i=0; i< sectBtn.lengh; i++){
        sectBtn[i].addEventListener("click",function(){
            let currentBtn=document.querySelectorAll(".active-btn");
            currentBtn[0].className=currentBtn[0].className.replace("active-btn",".");
            this.className+="active-btn";
        })

        
    }

    //sections active class
    allSections.addEventListener("click",(e)=>{
        const id
    }
        
    });


}
PageTransitions()