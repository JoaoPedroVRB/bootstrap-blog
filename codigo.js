const add_carrinho = document.getElementsByClassName("stretched-link")

for (let i = 0; i < add_carrinho.length; i++){
    add_carrinho[i].addEventListener("click",()=>{
        alert("Produto nao esta disponivel")
    })
}
/* Declarando a funçao pra usar no for 
for (let i = 0; i < add_carrinho.length; i++){
    add_carrinho[i].addEventListener("click",texto)}

function texto(){
    alert("Produto nao esta disponivel")
}*/