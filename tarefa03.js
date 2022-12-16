verificaTriangulo();
function verificaTriangulo() {

const A = Number(prompt("Digite um valor do lado A: "))
const B = Number(prompt("Digite um valor do lado B: "))
const C = Number(prompt("Digite um valor do lado C: "))

if(A < B + C && B < A + C && C < A + B){
  if(A!=B && B!=C && A!=C){
    alert("É um triângulo escaleno")
    return
  } if(A==B && B==C) {
    alert("É um Triângulo equilátero")
    return
  } if(A==B || A==C || B==C || A==B==C){
    alert("É um triângulo isósceles")
    return
  } else {
  alert("Não é um triângulo")
  }
 }
};
