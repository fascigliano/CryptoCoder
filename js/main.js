// BOTONES

botonCalcular()
botonCV()
function botonCalcular()
{
    const botonCalcular = document.getElementById("botonCalcular")
   
botonCalcular.addEventListener("click",()=>
{
    calcular()
   
})} 

function calcular()
{
let valorBTC = document.getElementById("valorBTC").value
    let resultado = `${valorBTC*20000}`
    
    document.getElementById("valorDolar").setAttribute('value', resultado)}

function botonCV()
{
    const botonCV = document.getElementById("botonCV")
    botonCV.addEventListener("click",()=>
    {
        pedirDatos()
        ordenesDeCompra.listarOperaciones()
    })
   
}

