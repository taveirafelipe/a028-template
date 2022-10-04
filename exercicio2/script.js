i=0;
function escondeSenha(){
    if(i%2 === 0){
        let myInput = document.getElementById("password");
        myInput.setAttribute("type", "password");
        i++;
    }else{
        let myInput = document.getElementById("password");
        myInput.setAttribute("type", "text");
        i++;
    }

}

function changeToDarkMode(){
    const change = document.querySelector(".light");
    
    change.classList.remove("light");
    change.classList.add("dark");
}

changeToDarkMode()