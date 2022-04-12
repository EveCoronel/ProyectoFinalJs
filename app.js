function init() {
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
        <textarea name="" id="contenidoIngresado">Contenido de la receta</textarea>
        <button id="guardar" type="submit">Guardar receta</button>`

        articulo.appendChild(contenedor);

        let contenidoIngresado = document.querySelector('#contenidoIngresado')
        let tituloIngresado = document.querySelector('#tituloIngresado');
        let recetaIngresada = document.querySelector('#guardar')

        recetaIngresada.addEventListener('click', () => {

            articulo.removeChild(contenedor)

            contenedor1.innerHTML += `<h3> ${tituloIngresado.value}</h3>
        <p> ${contenidoIngresado.value} </p>`;


            localStorage.setItem('recetaIngresada', contenedor1)

            articulo.appendChild(contenedor1);


            recetas.push(new Receta(tituloIngresado.value, contenidoIngresado.value));



        })

        console.log(recetas)
    })

}