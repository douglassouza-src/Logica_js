const primeiroNumero = Number(prompt("Por favor, digite um número."))
const segundoNumero = Number(prompt("Por favor, digite um número."))
const terceiroNumero = Number(prompt("Por favor, digite um número."))

if(primeiroNumero == segundoNumero || primeiroNumero == terceiroNumero || segundoNumero == terceiroNumero) {  
  alert("Você repetiu algum número na digitação.")
} else (primeiroNumero != segundoNumero && primeiroNumero != terceiroNumero && segundoNumero != terceiroNumero);{
  console.log("A soma desses valores é "+(primeiroNumero+segundoNumero+terceiroNumero))
  console.log("A média desses valores é "+(primeiroNumero+segundoNumero+terceiroNumero/3))
  console.log("O produto desses valores é "+(primeiroNumero*segundoNumero*terceiroNumero))
    if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    console.log("O maior número é o "+primeiroNumero)
  } else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    console.log("O maior número é o "+segundoNumero)
  } else {
    console.log("O maior número é o "+terceiroNumero)
  }
  if(primeiroNumero < segundoNumero && primeiroNumero < terceiroNumero) {
    console.log("O menor número é o "+primeiroNumero)
  } else if (segundoNumero < primeiroNumero && segundoNumero < terceiroNumero) {
    console.log("O menor número é o "+segundoNumero)
  } else {
    console.log("O menor número é o "+terceiroNumero)
  }
}