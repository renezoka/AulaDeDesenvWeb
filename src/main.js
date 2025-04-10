import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/`
<div class="card">

<h1>Acessando API</h1>

<div class="card">
<input type="text" placeholder="Digite uma Entrada">
<button>Buscar</button>
</div>

<div id="listaDeLivro">

</div>

`

    setupCounter(document.querySelector('#counter'))