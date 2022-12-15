const button = document.getElementById('button')
function ComputadorDeBordo(){
    const result = document.getElementById('result')
    const money = document.getElementById('money').value
    const gasolina = money / 5
    const km = gasolina * 20

    result.innerHTML= `Com R$${money} voce consegue comprar ${gasolina} litros de gasolina e andar ${km} KM`
}

button.addEventListener('click', ComputadorDeBordo)