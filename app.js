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


    console.log(recetas)

    if ((titulo !== null) && (contenido !== null)) {
        let articulo = document.getElementById('articulos')
        let contenedor = document.createElement('div');

        contenedor.innerHTML = `<h1> ${titulo} </h1>
    <p> ${contenido} </p>`;

        articulo.appendChild(contenedor);
        guardarReceta()

    }
}