function insert(num){
    let numero = document.getElementById("idisplay").innerHTML
    document.getElementById("idisplay").innerHTML = numero + num
}

function limpar(){
    document.getElementById("idisplay").innerHTML = ""
}

function apagar(){
    let digito = document.getElementById("idisplay").innerHTML;
    document.getElementById("idisplay").innerHTML = digito.substring(0, digito.length -1);
}

function calcular(){
    let resultado= document.getElementById("idisplay").innerHTML;
    if(resultado){
        document.getElementById("idisplay").innerHTML = eval(resultado)
    }
}




/*
let n1 = document.querySelector("#n1").value;
let valorN1 = parseInt(n1)
let n2 = document.querySelector("#n2").value;
let valorN2 = parseInt(n2)
let adicao = document.querySelector("#adicao").value;


function mostrarNoDisplay1(){
    let mostrar = document.getElementById("idisplay").innerHTML = valorN1
}

function mostrarNoDisplay2(){
    let mostrar = document.getElementById("idisplay").innerHTML = valorN2
}




function soma(){
    let n1 = document.querySelector("#n1");
    let valorN1 = n1.value;
    alert(valorN1)
}
*/
