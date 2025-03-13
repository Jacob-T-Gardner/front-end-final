const title = document.querySelector("#title");
const bigBox = document.querySelector(".big-box");
const littleBoxes = document.querySelectorAll(".little-box");

const toggle = document.querySelector(".switch");


for(let i = 0; i < littleBoxes.length; i++){
    const box = littleBoxes[i];
    box.addEventListener("click", () => {
        for (let j = 0; j < littleBoxes.length; j++) {
            const otherBox = littleBoxes[j];
            
            otherBox.classList.toggle("selected", false);
        }

        box.classList.toggle("selected")

    });
}

toggle.addEventListener("click", () => {
    if(!toggle.classList.toggle("on")){
        title.textContent = "about me";
    } else{
        title.textContent = "About me!";
    }

    for (let i = 0; i < littleBoxes.length; i++) {
        const elements = littleBoxes[i].children;

        for (let j = 0; j < elements.length; j++) {
            const element = elements[j];
            
            element.classList.toggle("disable");
        }
        
        
    }

    
});

