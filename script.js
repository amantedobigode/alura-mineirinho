document.addEventListener('DOMContentLoaded', function(){
const aumentaFonteBotao = document. getElementById('aumentar-fonte')
const diminuiFonteBotao = document. getElementById('diminuir-fonte')

let tamanhoatualFonte =1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoatualFonte +=0.1;
    document.body.style.fontSize = `${tamanhoatualFonte}rem`
})

diminuiFonteBotao.addEventListener('click', function(){
    tamanhoatualFonte -=0.1;
    document.body.style.fontSize = `${tamanhoatualFonte}rem`
})

})