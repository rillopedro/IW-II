//js é legal
function js(){
    alert("JavaScript é legal");
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("js").addEventListener("click", js);
})

//mudar o texto
function mudartxt(){
    document.getElementById("texto").innerText="Texto atualizado para javascript";
}
//mudar cor do fundo
function mudarcor(body) {
    document.body.style.backgroundColor= "blue"; 
}
//expor texto 
function txt(){
    const texto =document.getElementById('txt').value;
    alert("Aqui está seu texto ${txt}")
}