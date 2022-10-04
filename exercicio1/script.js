function addElementoInicio(){
    const newLi = document.createElement("li");
    const newContent = document.createTextNode("Item 0");
    newLi.appendChild(newContent);
    const novoLi = document.getElementById("lista");
    novoLi.insertAdjacentElement('afterbegin', newLi);
}

function addElementoFim(){
    const newLi = document.createElement("li");
    newLi.innerHTML = "Item 5"
    const novoLi = document.getElementById("lista");
    novoLi.insertAdjacentElement('beforeend', newLi);
}
let i=5;
function adicionarElementoFim(){
    i++;
    const newLi = document.createElement("li");
    newLi.innerHTML = `Item ${i}`
    const novoLi = document.getElementById("lista");
    novoLi.insertAdjacentElement('beforeend', newLi);
}

addElementoInicio()
addElementoFim()