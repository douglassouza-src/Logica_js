const numeroTotalDeEleitores = Number(prompt("Por favor, digite o número total de eleitores: "))
const numeroTotalDeVotosBrancos = Number(prompt("Por favor, digite o número total de votos brancos: "))
const numeroTotalDeVotosNulos = Number(prompt("Por favor, digite o número total de votos nulos: "))
const numeroTotalDeVotosValidos = Number(prompt("Por favor, digite o número total de votos válidos: "))

if(numeroTotalDeEleitores != numeroTotalDeVotosBrancos + numeroTotalDeVotosNulos + numeroTotalDeVotosValidos){
  alert("Valores impossíveis foram passados ao algoritmo.")
} else (numeroTotalDeEleitores) => {
  console.log("O percentual referente ao número total de votos brancos é: "+(numeroTotalDeVotosBrancos*100)/numeroTotalDeEleitores+"%")
  console.log("O percentual referente ao número total de votos nulos é: "+(numeroTotalDeVotosNulos*100)/numeroTotalDeEleitores+"%")
  console.log("O percentual referente ao número total de votos válidos é: "+(numeroTotalDeVotosValidos*100)/numeroTotalDeEleitores+"%")
}