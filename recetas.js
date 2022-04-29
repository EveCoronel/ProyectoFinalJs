function init() {

    imprimirDiv()

    recetasfetch()

}

class Receta {

    constructor(titulo, contenido) {
        this.titulo = titulo
        this.contenido = contenido

    }

}

const recetas = []

let articulo = document.getElementById('articulos')
let contenedor = document.createElement('div');
let contenedor1 = document.createElement('div');
let myBtn = document.querySelector("#boton")


myBtn.addEventListener('click', () => {

    contenedor.innerHTML = `<input type="text" name="Título" id="tituloIngresado">Título de la receta</input><br>
        <textarea name="" id="contenidoIngresado" placeholder="Contenido de la receta"></textarea>
        <button class="boton" id="guardar" type="submit">Guardar receta</button>
        <button class="boton" id="cancelar" >Cancelar</button>`

    contenedor.style = "margin: 2%;"
    articulo.appendChild(contenedor);



    let contenidoIngresado = document.querySelector('#contenidoIngresado')
    let tituloIngresado = document.querySelector('#tituloIngresado');
    let recetaIngresada = document.querySelector('#guardar')
    let cancelar = document.querySelector("#cancelar")

    recetaIngresada.addEventListener('click', () => {

        articulo.removeChild(contenedor)


        contenedor1.innerHTML += `<h3> ${tituloIngresado.value}</h3>
        <p> ${contenidoIngresado.value} </p>`;


        articulo.appendChild(contenedor1);
        recetas.push(new Receta(tituloIngresado.value, contenidoIngresado.value));
        localStorage.setItem('Recetas_Ingresadas', JSON.stringify(recetas))

    })

    cancelar.addEventListener('click', () => {

        articulo.removeChild(contenedor)
        articulo.removeChild(contenedor1)

        console.log('ola')


    })

    console.log(recetas)



})

function imprimirDiv() {

    let recetaGuardada = JSON.parse(localStorage.getItem('Recetas_Ingresadas'));

    if (recetaGuardada) {

        recetaGuardada.forEach(element => {

            let {
                titulo,
                contenido
            } = element

            console.log(titulo)

            let contenedor2 = document.createElement('div');

            contenedor2.className = "div"

            contenedor2.innerHTML += `<h3> ${titulo}</h3>
        <p> ${contenido} </p>`;

            articulo.appendChild(contenedor2);
        });
    }

}




let url = "recetas.json"
fetch(url)
    .then((res) => res.json())
    .then((data) => {
        recetasfetch(data)
    });

function recetasfetch(data) {

    let contenedor3 = document.createElement('div');
    contenedor3.className = "div"


    console.log(data)



    contenedor3.innerHTML = `<h3> ${data.titulo}</h3>
        <img src=${data.imagen}>`


    data.ingredientes.forEach((element) => {

        contenedor3.innerHTML += `<ul>${element}</ul>`

    })


    data.preparacion.forEach((element) => {

        contenedor3.innerHTML += `<ol>${element}</ol>`

    })


    articulo.appendChild(contenedor3);



}