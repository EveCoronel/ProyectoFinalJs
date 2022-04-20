// Algoritmo
// 1) Almacenar los datos recibidos a través del formulario
// 2) Mostrar un Sweet alert para las dos opciones, enviado, o cancelado
// 3) En caso de confirmar el pedido, mostrar un sweat alert con los datos de la orden.

function init() {

    enviarFormulario()

}


function enviarFormulario() {

    let btnEnviar = document.querySelector('#myForm')

    btnEnviar.addEventListener('submit', (event) => {

        event.preventDefault()

        almacenarDatos()

        if (saborBis.value === "0" && saborRell.value === "0" && kilos.value === "0" && topping.value === "0") {
            alert('Oh oh algo salió mal')

        } else {
            alert('Enviado ok')

            pedidos.push(new PedidoRecibido(saborBis, saborRell, kilos, topping))
            console.log(pedidos)
        }



    })

}

function almacenarDatos() {
    let saborBis = document.querySelector("#saborBis").value;
    console.log(saborBis)

    let saborRell = document.querySelector('#saborRell').value;
    console.log(saborRell)

    let kilos = document.querySelector('#kilos').value;
    console.log(kilos)

    let topping = document.querySelector('#topping').value;
    console.log(topping)

    return saborBis, saborRell, kilos, topping

}

let pedidos = []

class PedidoRecibido {

    constructor(saborBis, saborRell, kilos, topping) {

        this.saborBis = saborBis.value
        this.saborRell = saborRell.value
        this.kilos = kilos.value
        this.topping = topping.value

    }

}