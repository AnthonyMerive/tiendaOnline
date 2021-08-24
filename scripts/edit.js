let formulario = document.getElementById('formulario');
let btnGuardar = document.getElementById('btnGuardar');
let btnBuscar = document.getElementById('btnBuscar');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const categoria = document.getElementById('categorie').value;
    const titulo = document.getElementById('name').value;
    const precio = document.getElementById('prize').value;
    const imagen = document.getElementById('image').value;

    let resp = await fetch(`http://localhost:4001/${categoria}`, {
        method: 'POST',
        body: JSON.stringify({
            name: titulo,
            prize: precio,
            image: imagen
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

btnBuscar.addEventListener('click', async (e) => {
    e.preventDefault();

    const categoria = document.getElementById('categorie').value;
    const titulo = document.getElementById('name').value;

    document.getElementById('image').value;

    let resp = await fetch(`http://localhost:4001/${categoria}`)
    let data = await resp.json();
    let buscar = data.find(juego => juego.name.toLowerCase() === titulo.toLowerCase());

    const { prize, image, id } = buscar;
    document.getElementById('image').value = image;
    document.getElementById('prize').value = prize;
    document.getElementById('id').value = id;

})

btnEditar.addEventListener('click', async (e) => {
    e.preventDefault();

    const categoria = document.getElementById('categorie').value;
    const titulo = document.getElementById('name').value;
    const precio = document.getElementById('prize').value;
    const imagen = document.getElementById('image').value;
    const id = document.getElementById('id').value;

    let resp = await fetch(`http://localhost:4001/${categoria}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: titulo,
            prize: precio,
            image: imagen,
            id: id
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

btnEliminar.addEventListener('click', async (e) => {
    e.preventDefault();

    const categoria = document.getElementById('categorie').value;
    let id = document.getElementById('id').value;
    let resp = await fetch(`http://localhost:4001/${categoria}/${id}`, {
        method: 'DELETE',
    })
})