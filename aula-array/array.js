var listadefrutas = ['banana, maçãs, uvas, morango, manga']
var primeiroItem = listadefrutas[0]; //pega o item banana
var segundoItem = listadefrutas[1]; //pega o item maçãs
var terceiroItem = listadefrutas[2]; //pega o item uvas

listadefrutas.forEach(function(item, indice) {
    console.log(item, indice)
})

