function checkCaps(event){
    if(event.shiftKey){
        document.getElementById("mensagem").innerHTML = "ATENÇÃO: SEGURANDO SHIFT!";
    }else{
        document.getElementById("mensagem").innerHTML = "";
    }
}