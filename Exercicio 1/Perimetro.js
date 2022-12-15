const resultado = document.getElementById('resultado')
const button = document.getElementById('button')

function calculate(){
    const raio = document.getElementById('raio').value
    area = Math.PI * raio ** 2
    perimetro = 2 * Math.PI * raio
    resultado.innerText = `A area do circulo é de: ${area.toFixed(2)} cm²
    e o perímetro e de: ${perimetro.toFixed(2)} cm`
}

button.addEventListener('click', calculate)