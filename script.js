let bars = document.querySelector("header i");


let navigation = document.querySelector("header nav ul");

bars.onclick = function(){
    navigation.classList.toggle("open");
}

document.addEventListener("click", (e) => {

    if(e.target !== bars && e.target !== navigation){
        navigation.classList.remove("open")
    }
})