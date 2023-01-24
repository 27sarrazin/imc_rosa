


function calcular(){
    var h=parseFloat(altura.value)
    var p=parseFloat(peso.value)

    console.log(h)
    console.log(p)
    var imc=p/(h*h)
    var resultado=document.getElementById("resultado")
    resultado.innerHTML=imc.toFixed(2)
    
}

