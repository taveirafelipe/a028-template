function insereItem(event) {
  if (confereItem()) {
    alert("Item existente, favor inserir outro item!");
  } else {
    const newLi = document.createElement("li");
    newLi.innerHTML = document.getElementById("meu-input").value;
    const lista = document.getElementById("lista");
    lista.insertAdjacentElement("beforeend", newLi);
  }
}

function confereItem() {
  const todasLi = document.getElementsByTagName("li");
  console.log(todasLi);
  for (let item of todasLi) {
    if (
      item.innerText.toLocaleUpperCase() ===
      document.getElementById("meu-input").value.toLocaleUpperCase()
    ) {
      return true;
    }
  }
  return false;
}
