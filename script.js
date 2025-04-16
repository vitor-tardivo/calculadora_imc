const pesoInput = document.getElementById('peso')
const alturaInput = document.getElementById('altura')
const calcularBtn = document.getElementById('calcular')
const apagarBtn = document.getElementById('apagar')
const erroTexto = document.getElementById('erro')
const resultadoDiv = document.getElementById('resultado')
const valorIMC = document.getElementById('valor-imc')
const classificacaoTexto = document.getElementById('classificacao')

function calcularIMC() {
  const peso = parseFloat(pesoInput.value)
  const altura = parseFloat(alturaInput.value)

  erroTexto.textContent = ''

  if (!pesoInput.value || !alturaInput.value) {
    erroTexto.textContent = 'Preencha todos os campos.'
    return
  }

  if (isNaN(peso) || isNaN(altura)) {
    erroTexto.textContent = 'Digite apenas números válidos.'
    return
  }

  if (peso <= 0 || altura <= 0) {
    erroTexto.textContent = 'Peso e altura devem ser maiores que zero.'
    return
  }

  const imc = parseFloat((peso / (altura * altura)).toFixed(2))
  let classificacao = ''

  if (imc < 18.5) classificacao = 'Baixo peso'
  else if (imc < 25) classificacao = 'Peso normal'
  else if (imc < 30) classificacao = 'Sobrepeso'
  else if (imc < 35) classificacao = 'Obesidade grau I'
  else if (imc < 40) classificacao = 'Obesidade grau II'
  else classificacao = 'Obesidade grau III'

  valorIMC.textContent = `Seu IMC é: ${imc}`
  classificacaoTexto.textContent = `Classificação: ${classificacao}`
  resultadoDiv.classList.remove('hidden')

  localStorage.setItem('ultimoIMC', JSON.stringify({ peso, altura, imc, classificacao }))
}

function resetarIMC() {
  pesoInput.value = ''
  alturaInput.value = ''
  valorIMC.textContent = ''
  classificacaoTexto.textContent = ''
  resultadoDiv.classList.add('hidden')
  localStorage.removeItem('ultimoIMC')
}

function carregarLocalStorage() {
  const dados = localStorage.getItem('ultimoIMC')
  if (dados) {
    const { peso, altura, imc, classificacao } = JSON.parse(dados)
    pesoInput.value = peso
    alturaInput.value = altura
    valorIMC.textContent = `Seu IMC é: ${imc}`
    classificacaoTexto.textContent = `Classificação: ${classificacao}`
    resultadoDiv.classList.remove('hidden')
  }
}

calcularBtn.addEventListener('click', calcularIMC)
apagarBtn.addEventListener('click', resetarIMC)

window.addEventListener('DOMContentLoaded', carregarLocalStorage)
