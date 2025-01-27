const background = document.body
const activate = document.getElementById('dark-mode');
let pText = document.getElementById('about-text')
const darkInteract = document.getElementById('darkimage')
let isOn = false;
let toggle = () =>{
    isOn = !isOn;

    if(isOn){
        darkInteract.src = "../assets/sun.png"
        background.style.backgroundColor = "#2d3b43"
        pText.style.color = "#fff"
      } else {
        darkInteract.src = "../assets/darkButton.png"
        background.style.backgroundColor = "#E4F6F8"
        pText.style.color = "black"
      }
}

activate.addEventListener("click",()=>{
  toggle();
})