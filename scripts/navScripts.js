const navButtons = document.getElementsByClassName("items");

navButtons[1].addEventListener("click",()=>{
    console.log("order button was clicked");
    for(let i = 0; i < navButtons.length; i++){
        if(navButtons[i].classList.contains("active")){
            navButtons[i].classList.remove("active")
        }
    }
    navButtons[1].classList.add("active")
})
navButtons[2].addEventListener("click",()=>{
    console.log("about us button was clicked");
    for(let i = 0; i < navButtons.length; i++){
        if(navButtons[i].classList.contains("active")){
            navButtons[i].classList.remove("active")
        }
    }
    navButtons[2].classList.add("active")
})
navButtons[3].addEventListener("click",()=>{
    console.log("contact button was clicked");
    for(let i = 0; i < navButtons.length; i++){
        if(navButtons[i].classList.contains("active")){
            navButtons[i].classList.remove("active")
        }
    }
    navButtons[3].classList.add("active")
})
navButtons[0].addEventListener("click",()=>{
    console.log("home button was clicked");
    for(let i = 0; i < navButtons.length; i++){
        if(navButtons[i].classList.contains("active")){
            navButtons[i].classList.remove("active")
        }
    }
    navButtons[0].classList.add("active")
})