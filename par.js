var b1 = document.getElementById('botao')
var resp = document.getElementById('res')

function verificar(){
    resp.innerText +='Números pares de 1 a 10\n' 
    for(var cont = 1; cont<=10;cont++){
        if(cont%2==0){
            resp.innerText+= cont + '\n'
        }
    }
}

function calcular(){
    var b2 = document.getElementById('botao2')
    var contador 
    resp.innerText +='Números ímpares de 10 a 1\n' 
    for(contador = 10; contador>=1;contador--){
        if(contador%2 !=0){
            resp.innerText += contador + '\n'
        }
        
    }
    
}

function limpar(){
    var b3 = document.getElementById('botao3')
    resp.innerText=''
}