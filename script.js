const nome = document.querySelector('[data-nome]')
const moeda = document.querySelector('[data-moeda]')

const a = fetch('https://economia.awesomeapi.com.br/json/all/BTC')
a.then((r) => {
    return r.json()
}).then((jason) => {
    console.log(jason)
    nome.innerText = jason.BTC.name
    moeda.innerText = jason.BTC.ask
})
