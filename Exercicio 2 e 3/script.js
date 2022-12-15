function calcTemp(){
    const options = document.getElementById('options').value
    const temp = document.getElementById('temp').value
    const result = document.getElementById('result')

    
    if(options == 'Fahrenheit' && temp != ''){
        const fahrenheit = (temp * 9 / 5) + 32 
        result.innerHTML=`A conversão de ${temp} °C para Fahrenheit e igual a: ${fahrenheit.toFixed(2)} °F`
    } else if(options == 'Celsius' && temp != ''){
        const celsius = (temp - 32) * 5 / 9
        result.innerHTML=`A conversão de ${temp} °F para Celsius e igual a: ${celsius.toFixed(2)} °C`
    }else{
        result.innerHTML='Escolha qual temperatura voce quer converter'
    }
}


teste2.addEventListener('click', calcTemp)