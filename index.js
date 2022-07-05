// variavel que escolhe a função
// 1 tensao
// 2 corrente
// 3 resistencia

let tipoCalculo = 3;

// função 
function tensao(cor, resis) {
  let resultado = cor * resis;
  return resultado;
}
// tipo de calculo pelo if
  if (tipoCalculo == 1) {
    console.log(tensao(20, 30));
  } else {
    console.log(tensao(240, 30));
  }
// estudar case
