import { getStockData } from "./fakeStockAPI.js";  


const containerEl = document.querySelector('#container');

function renderStockTicker(){
  const guncelSaat = new Date().toLocaleTimeString('tr-TR')
containerEl.innerHTML = 
` 
    <h3>Name: ${getStockData().name} </h3>
    <h3>Symbol: ${getStockData().sym} </h3>
    <h3>Price: ${getStockData().price} </h3>
    <h3>Time: ${guncelSaat} </h3>
`
}


function freshStart(){
  renderStockTicker();
  setInterval(renderStockTicker, 1500);
}

freshStart();