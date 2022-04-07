function init() {
    class Receta {

        constructor(titulo, contenido) {
            this.titulo = titulo
            this.contenido = contenido

        }

    }

    const recetas = []

    function guardarReceta() {
        recetas.push(new Receta(titulo, contenido))
    }

    let titulo = prompt('Comparte tu receta. Ingresa el título de tu receta')
    let contenido = prompt('Escribe el paso a paso de tu receta')

    guardarReceta()

    console.log(recetas)


    let contenedor = document.createElement('articule');

    contenedor.innerHTML = `<div> 
    <h1> ${titulo} </h1>
    <p> ${contenido} </p>
    </div>`;

    document.body.appendChild(contenedor);

}