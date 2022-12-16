const precoNaTabela = Number(prompt("Qual é o preço que consta na tabela?"));
const numeroDeParcelas = parseInt(prompt("Qual será o número de parcelas? Lembre que uma parcela é o pagamento à vista."));


if (precoNaTabela <= 0 || numeroDeParcelas <= 0 || numeroDeParcelas >= 16) {
  console.log("Por favor, digite um valor adequado");
} else if (numeroDeParcelas == 1) {
  const resultado = (0.975) * precoNaTabela;
  console.log("O preço total da compra é o preço da parcela única, que é: " + resultado + ".");
} else if (2 <= numeroDeParcelas && numeroDeParcelas <= 5) {
  resultado = precoNaTabela;
  console.log("O preço total da compra é: " + resultado + ".")
  console.log("O preço da parcela é: " + resultado / numeroDeParcelas + ".")
} else if (6 <= numeroDeParcelas && numeroDeParcelas <= 10) {
  resultado = (1.06) * precoNaTabela;
  console.log("O preço total da compra é: " + resultado + ".")
  console.log("O preço da parcela é: " + resultado / numeroDeParcelas + ".")
} else if (11 <= numeroDeParcelas && numeroDeParcelas <= 15) {
  resultado = (1.13) * precoNaTabela;
  console.log("O preço total da compra é: " + resultado + ".")
  console.log("O preço da parcela é: " + resultado / numeroDeParcelas + ".")
} else {
  console.log("Digite valores adequados. ")
};