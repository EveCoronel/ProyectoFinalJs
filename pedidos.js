/* 
Algoritmo pseudocódigo para tomar un pedido

1. Pedirle al usuario que ingrese el sabor // Verificar que la elección sea valida
2. Pedirle al usuario que ingrese el sabor del relleno // Verificar que la elección sea valida
3. Pedirle al usuario que ingrese el peso del postre // Verificar que la elección sea valida
4. Pedirle al usuario que ingrese la decoración // Verificar que la elección sea valida
5. Mostrarle al usuario el pedido que quiere realizar 
6. Solicitar la fecha de entrega // Verificar que el dato ingresado sea válido
7. Pedirle la confirmación del pedido al usuario.
8. Mostrarle al usuario la confirmación del pedido. 

*/

let accion = true
let finalizar = "0"

class Pedido {

    constructor(numero, sabor, relleno, peso, topping) {

        this.numero = numero
        this.sabor = sabor
        this.relleno = relleno
        this.peso = peso
        this.topping = topping

    }


}

const pedidos = []


function continuar() {
    alert("¡Perfecto! Presiona 'Aceptar' para continuar")
}

function invalido() {

    alert("Ingreso inválido")
}


let sabores = [{
        nombre: "chocolate",
        precio: 200
    },
    {
        nombre: "marmolado",
        precio: 210
    },
    {
        nombre: "limon",
        precio: 220
    },
    {
        nombre: "vainilla",
        precio: 190
    }
]

hacerPedido()


function hacerPedido() {

    let sabor = prompt('Ingresa el sabor de bizcochuelo que deseas\n Chocolate\n Marmolado\n Limon\n Vainilla\n').toLowerCase();

    while (accion) {

        if ((sabor == "chocolate") || (sabor == "marmolado") || (sabor == "limon") || (sabor == "vainilla")) {

            continuar()
            break

        }

        sabor = prompt('Dato inválido. Ingresa el sabor de bizcochuelo que deseas\n Chocolate\n Marmolado\n Limon\n Vainilla\n').toLowerCase();

    }
    relleno = prompt('Ingresa el sabor de relleno que deseas\n Chocolate\n Nutella\n Dulce de leche\n Limon\n').toLowerCase();

    while (accion) {
        if ((relleno == "chocolate") || (relleno == "nutella") || (relleno == "dulce de leche") || (relleno == "limon")) {

            continuar()
            break
        }

        invalido()

        relleno = prompt('Ingresa el sabor de relleno que deseas\n Chocolate\n Nutella\n Dulce de leche\n Limon\n').toLowerCase();

    }

    peso = prompt('Ingresa los kilos que deseas\n 1kg // Dos personas\n 3kg // Seis personas\n 5kg// Diez personas\n 7kg // Catorce personas\n').toLowerCase();

    while (accion) {

        if ((peso == "1kg") || (peso == "3kg") || (peso == "5kg") || (peso == "7kg")) {

            continuar()
            break
        }

        invalido()
        peso = prompt('Ingresa los kilos que deseas\n 1kg // Dos personas\n 3kg // Seis personas\n 5kg// Diez personas\n 7kg // Catorce personas\n').toLowerCase();


    }

    topping = prompt('Ingresa el topping que desees\n Oreos\n Dulce de leche\n Fruta\n Merengue\n').toLowerCase();

    while (accion) {
        if ((topping == "oreos") || (topping == "dulce de leche") || (topping == "fruta") || (topping == "merengue")) {
            continuar()
            break
        }
        invalido()
        topping = prompt('Ingresa el topping que desees\n Oreos\n Dulce de leche\n Fruta\n Merengue\n').toLowerCase();


    }

    numero = prompt('Ingresa tu numero de teléfono');


    alert('Su postre será de ' + sabor + ' relleno de ' + relleno + ' con decoración ' + topping + ' y pesará ' + peso)


    finalizar = prompt('Ingrese 1. Para confirmar la orden \n 2. Para confirmar y realizar otro pedido \n 3. Para salir.').toLowerCase();

    while (accion) {
        if (finalizar == "1") {
            accion == true

            pedidos.push(new Pedido(numero, sabor, relleno, peso, topping));
            break

        } else if (finalizar == "2") {
            accion == true

            pedidos.push(new Pedido(numero, sabor, relleno, peso, topping));

            hacerPedido()
            break
        } else if (finalizar == '3') {
            accion == false
            break
        }

        invalido()
        finalizar = prompt('Ingrese 1. Para confirmar la orden \n 2. Para confirmar y realizar otro pedido \n 3. Para salir.').toLowerCase();

    }

}
    console.log(Pedido)
    console.log(pedidos)

    let numeroIngresado = prompt('Busca tu pedido con tu número de teléfono')

    const encontrados = pedidos.filter((pedido) => {
        return pedido.numero.indexOf(numeroIngresado) !== -1;

    })

    console.log(encontrados)