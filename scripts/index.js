let botonPs = document.getElementById('btnPs');
let botonXbox = document.getElementById('btnXbox');
let botonNtnd = document.getElementById('btnNtnd');
let botonConsole = document.getElementById('btnConsole');

let titulos = document.getElementById('titulos');
let template = document.getElementById('template').content;
let items = document.getElementById('items');
let fragment = document.createDocumentFragment();

let URL_Ps = 'http://localhost:4001/playstation'
let URL_Xbox = 'http://localhost:4001/xbox'
let URL_Ntnd = 'http://localhost:4001/nintendo'
let URL_Console = 'http://localhost:4001/consolas'

botonPs.addEventListener('click', (e) => {
    e.preventDefault();
    getPs(URL_Ps);
});

botonXbox.addEventListener('click', (e) => {
    e.preventDefault();
    getXbox(URL_Xbox);
});

botonNtnd.addEventListener('click', (e) => {
    e.preventDefault();
    getNtnd(URL_Ntnd);
});

botonConsole.addEventListener('click', (e) => {
    e.preventDefault();
    getConsole(URL_Console);
});

const getPs = async (datos) => {
    try {
        const res = await fetch(datos)
        const data = await res.json()
        pintarPs(data);
    } catch (error) {
        console.log(error)
    }
}

const getXbox = async (datos) => {
    try {
        const res = await fetch(datos)
        const data = await res.json()
        pintarXbox(data);
    } catch (error) {
        console.log(error)
    }
}

const getNtnd = async (datos) => {
    try {
        const res = await fetch(datos)
        const data = await res.json()
        pintarNtnd(data);
    } catch (error) {
        console.log(error)
    }
}

const getConsole = async (datos) => {
    try {
        const res = await fetch(datos)
        const data = await res.json()
        pintarConsole(data);
    } catch (error) {
        console.log(error)
    }
}

const pintarPs = data =>{

    titulos.innerHTML='';
    items.innerHTML='';
       
    data.forEach(juegos =>{
       const {name,image, prize, id} = juegos;
        template.querySelector('h5').textContent = name;
        template.querySelector('p').textContent = prize;
        template.getElementById('image').setAttribute('src', image);
        template.querySelector('#boton').dataset.id = id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    titulos.innerHTML=`
    <br>
    <br>
    <img src="./images/ps5/ps5logo.png" alt="">
        <h2>PlayStation 5</h2>`
}

const pintarXbox = data =>{

    titulos.innerHTML='';
    items.innerHTML='';
       
    data.forEach(juegos =>{
       const {name,image, prize, id} = juegos;
        template.querySelector('h5').textContent = name;
        template.querySelector('p').textContent = prize;
        template.getElementById('image').setAttribute('src', image);
        template.querySelector('#boton').dataset.id = id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    titulos.innerHTML=`
    <br>
    <br>
    <img src="./images/xbox/xboxlogo.png" alt="">
        <h2>Xbox series X|S</h2>`
}

const pintarNtnd = data =>{

    titulos.innerHTML='';
    items.innerHTML='';
       
    data.forEach(juegos =>{
       const {name,image, prize, id} = juegos;
        template.querySelector('h5').textContent = name;
        template.querySelector('p').textContent = prize;
        template.getElementById('image').setAttribute('src', image);
        template.querySelector('#boton').dataset.id = id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    titulos.innerHTML=`
    <br>
    <br>
    <img src="./images/switch/switchlogo.png" alt="">
        <h2>Nintendo Switch</h2>`
}

const pintarConsole = data =>{

    titulos.innerHTML='';
    items.innerHTML='';
       
    data.forEach(juegos =>{
       const {name,image, prize, id} = juegos;
        template.querySelector('h5').textContent = name;
        template.querySelector('p').textContent = prize;
        template.getElementById('image').setAttribute('src', image);
        template.querySelector('#boton').dataset.id = id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
    titulos.innerHTML=`
    <br>
    <br>
        <h2>Consolas</h2>`
}



