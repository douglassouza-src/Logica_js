const anoAtual = Number(prompt("Por favor, digite o ano atual: "));
const anoDeNascimento = Number(prompt("Por favor, digite o ano de nascimento: "));

if(anoAtual*anoDeNascimento < 0 || anoAtual + anoDeNascimento < 0 || anoDeNascimento >= anoAtual) {
  alert("Por favor, digite valores adequados.")
} else if(anoAtual - anoDeNascimento >= 16) {
  console.log("Você pode votar.")
} else {
  console.log("Você não pode votar.")
}