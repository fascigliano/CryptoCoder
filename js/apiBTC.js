

setInterval(() => {
    valorBTC()
}, 3000);

valorBTC()
function valorBTC()
{
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccube&vs_currencies=usd')
    .then( (resp) => resp.json() )
    .then((json)=>mostrarValor(json))}


function mostrarValor(btc)
{
    const btcActual = document.getElementById ("ValorActual")
    btcActual.innerText= `
    Valor BTC: ${btc.bitcoin.usd}`
}
