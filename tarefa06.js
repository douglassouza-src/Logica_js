const grausCelsius = Number(prompt("Por favor, digite uma temperatura em graus Celsius: "));

if(grausCelsius < -273.15) {
  alert("A temperatura digitada está abaixo do zero kelvin, ou seja, não existe.");
} else if(grausCelsius >= -273.16) {
  const grausFahrenheit = 1.8*grausCelsius + 32;
  console.log("A temperatura, em Fahrenheit's, é: "+grausFahrenheit)
} else {
  console.log("Digite um número, por favor.")
}