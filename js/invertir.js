const date = luxon.DateTime
const dateLocal = date.local()
const Fecha = {
    Año : dateLocal.year,
    Mes : dateLocal.month,
    Día : dateLocal.day
}

calcularInteres()
function calcularInteres()
{
    const btcInversion = document.getElementById("calcularTiempo")
   
    btcInversion.addEventListener("click",()=>
{
    interes()
   
})} 

function cancelarOrden(orden)
{
    

    const botonCancelar = document.getElementById(`${orden.id}`)
    botonCancelar.addEventListener("click",()=>
    {
        Swal.fire({title: "Confirmar operación",
icon: 'warning',
showCloseButton: true,
showCancelButton: true,
cancelButtonText:"Cancelar"}
).then((result) => {
    if (result.isConfirmed) {
        const ordenes = ordenesDeInversion.ordenes
        const reemplazo = {
           id: `${orden.id}`,
           tiempo:0,
           cantidad:0,
           resultado: `Interés Ganado: 0`,
           fecha: `${Fecha.Año}/${Fecha.Mes}/${Fecha.Día}`
        }
           ordenes.splice(orden.id-1,1, reemplazo)
            ordenesDeInversion.listarOrdenInv()
            localStorage.setItem(`OrdenesDeInversión`, JSON.stringify(ordenesDeInversion))
      Swal.fire(
        'Su operación ha sido cancelada!',
       
      )
    }
  })
  })
    }
    
 
function interes()
{
    let btcInvertir = document.getElementById("btcInvertidos").value
    let duración = document.getElementById("tiempo").value
   
  if(duración=="30")
  {
let resultado2 = `${btcInvertir*1.0025-btcInvertir}`
document.getElementById("interes").innerText= `Interés Ganado: ${resultado2} `
  }

else if(duración=="60")
{
let resultado2 = `${btcInvertir*1.005-btcInvertir}`
document.getElementById("interes").innerText= `Interés Ganado: ${resultado2} `
}

else if (duración=="90")
{
    let resultado2 = `${btcInvertir*1.0075-btcInvertir}`
    document.getElementById("interes").innerText= `Interés Ganado: ${resultado2} `
    
    }
    else
    {Swal.fire("operación invalida")}
}

class OrdenInversión{
    constructor(id,tiempo,cantidad,resultado,fecha)
    {
        this.id=id
        this.tiempo=tiempo
        this.cantidad=cantidad
        this.resultado=resultado
        this.fecha=fecha
    }
}

class OrdenesInv {
    constructor(ordenes)
    {
        this.ordenes = ordenes
    }
    agregarOrden(orden)
    {
    this.ordenes.push(orden)}
    
    darCantidad()
    {
        return this.ordenes.length
    }
    listarOrdenInv()
    {
       const menuOrdenesInv = document.getElementById("listaOrdenesInv")
        menuOrdenesInv.innerHTML=""   
        
       
      
this.ordenes.forEach((orden)=>
        {
            
            const divOrden = document.createElement("ul")
           divOrden.innerHTML= `<li>ID: ${orden.id}</li>
           <li> Duración: ${orden.tiempo} días</li>
           <li> Cantidad BTC: ${orden.cantidad}</li>
           <li>${orden.resultado}</li>
           <li> Fecha de inicio: ${Fecha.Año}/${Fecha.Mes}/${Fecha.Día}</li>
           <li><input type="button" value="X" id="${orden.id}"</li>
      `
      divOrden.setAttribute("style", "list-style: none; display: flex; flex-direction: row; justify-content: space-between"
      )
       menuOrdenesInv.appendChild(divOrden)
       cancelarOrden(orden)
        })}
  }

        const ordenesDeInversion = new OrdenesInv([])
  


   

EjecutarInversión()

function EjecutarInversión()
{
    const botonInvert = document.getElementById("ejecutarInversion")
   
    botonInvert.addEventListener("click",()=>
    
    
    {
        Swal.fire({title: "Confirmar operación",
        icon: 'warning',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText:"Cancelar"}
        ).then((result) => {
            if (result.isConfirmed) {
                interes()
                calcularInteres()
                generarOrdenInversion()
                localStorage.setItem(`OrdenesDeInversión`, JSON.stringify(ordenesDeInversion))
                ordenesDeInversion.listarOrdenInv()
              Swal.fire(
                'Su orden se ha generado con éxito!',
               
              )
            }
          })
      
 
      
})
}
  


function generarOrdenInversion()
{
    interes()
    let tiempo = document.getElementById("tiempo").value
    let Valor = document.getElementById("btcInvertidos").value
    let fecha = Fecha
    let resultado= document.getElementById("interes").innerText

    if (Valor=="" || Valor==0)
    {
        (Swal.fire("Orden incompleta"))}
        else
    {
            
    let orden = new OrdenInversión (ordenesDeInversion.darCantidad()+1, tiempo,Valor, resultado, fecha)
    ordenesDeInversion.agregarOrden(orden)
    localStorage.setItem(`OrdenesDeInversión`, JSON.stringify(ordenesDeInversion))
    }
    }

modificarOrdenes()
function modificarOrdenes()
{
    const botonModificar = document.getElementById("modificarOrden")
botonModificar.addEventListener("click",()=>
  {
    
    Swal.fire({title: "Confirmar operación",
    icon: 'warning',
    showCloseButton: true,
    showCancelButton: true,
    cancelButtonText:"Cancelar"}
    ).then((result) => {
        if (result.isConfirmed) {
            const ordenAMOD = document.getElementById("IDaMod").value
    const ordenes = ordenesDeInversion.ordenes
    const btcInvertir = document.getElementById("MontoaMod").value
    const duración = document.getElementById("TiempoaMod").value
   
  if(duración=="30")
  {
let resultado2 = `${btcInvertir*1.0025-btcInvertir}`
const reemplazo = {
    id: ordenAMOD,
    tiempo: duración,
    cantidad: btcInvertir,
    resultado: `Interés Ganado: ${resultado2} `,
    fecha: `${Fecha.Año}/${Fecha.Mes}/${Fecha.Día}`
} 
if(buscarOrden2(ordenAMOD))
{Swal.fire(
    'Su orden se ha modificado con éxito!',
   
  )
        ordenes.splice(ordenAMOD-1,1, reemplazo)
        localStorage.setItem(`OrdenesDeInversión`, JSON.stringify(ordenesDeInversion))}
        else{
            Swal.fire("Orden no encontrada")
        }
      
  }

else if(duración=="60")
{
let resultado2 = `${btcInvertir*1.005-btcInvertir}`
const reemplazo = {
    id: ordenAMOD,
    tiempo: duración,
    cantidad: btcInvertir,
    resultado: `Interés Ganado: ${resultado2} `,
    fecha: `${Fecha.Año}/${Fecha.Mes}/${Fecha.Día}`
} 
if(buscarOrden2(ordenAMOD))
{Swal.fire(
    'Su orden se ha modificado con éxito!',
   
  )
        ordenes.splice(ordenAMOD-1,1, reemplazo)
        localStorage.setItem(`OrdenesDeInversión`, JSON.stringify(ordenesDeInversion))}
        else{
            Swal.fire("Orden no encontrada")
        }
}

else
{
    let resultado2 = `${btcInvertir*1.0075-btcInvertir}`
    const reemplazo = {
        id: ordenAMOD,
        tiempo: duración,
        cantidad: btcInvertir,
        resultado: `Interés Ganado: ${resultado2} `,
        fecha: `${Fecha.Año}/${Fecha.Mes}/${Fecha.Día}`
    } 
    if(buscarOrden2(ordenAMOD))
    {
        Swal.fire(
            'Su orden se ha modificado con éxito!',
           
          )
            ordenes.splice(ordenAMOD-1,1, reemplazo)
            localStorage.setItem(`OrdenesDeInversión`, JSON.stringify(ordenesDeInversion))}
            else{
                Swal.fire("Orden no encontrada")
            }
    }
    
    ordenesDeInversion.listarOrdenInv()
    localStorage.setItem(`OrdenesDeInversión`, JSON.stringify(ordenesDeInversion))
          
        }
      })
  })
}




mostrarOrdenesGuardadas()
function mostrarOrdenesGuardadas()
{
    const storage = JSON.parse(localStorage.getItem(`OrdenesDeInversión`))
    
storage.ordenes.forEach((orden)=>
{
    ordenesDeInversion.agregarOrden(orden)
})}
ordenesDeInversion.listarOrdenInv()



function buscarOrden2(ID)
{

    let ordenCancel2 = ordenesDeInversion.ordenes[ID-1]
if (ID = ordenCancel2)
{ 
    let resultado = true
    return resultado

}  else{
    let resultado = false
    return resultado
    
}}
