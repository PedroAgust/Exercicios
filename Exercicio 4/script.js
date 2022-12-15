const button = document.getElementById('button')
function ComputadorDeBordo(){
    const result = document.getElementById('result')
    const money = document.getElementById('money').value
    const gasolina = money / 5
    const km = gasolina * 20

    if(money != ''){
        result.innerHTML= `Com R$${money} voce consegue comprar ${gasolina} litros de gasolina e andar ${km} KM`
    }else{
        result.innerHTML= 'Informe quanto de dinheiro voce tem!'
    }
}

button.addEventListener('click', ComputadorDeBordo)