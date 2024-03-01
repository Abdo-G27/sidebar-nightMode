// sidebar script

const menu = document.querySelector(".menu");
const back = document.querySelector(".back");
const side = document.querySelector(".sidebar");
 
menu.onclick=()=>{
    side.style.display = "block";
    
}

back.onclick=()=>{
    side.style.display = "none";
}

// light & dark mode

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const mode = document.querySelector(".mode");

light.onclick=()=>{
    mode.href = "lightMode.css";
    
}

dark.onclick=()=>{
    mode.href = "darkMode.css";
}







