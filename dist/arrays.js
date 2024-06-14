"use strict";

var alunos = [{
  nome: 'Junior',
  nota: 9
}, {
  nome: 'Pedro',
  nota: 5
}, {
  nome: 'Maria',
  nota: 8
}, {
  nome: 'Tiago',
  nota: 6
}, {
  nome: 'Lucas',
  nota: 3
}];
function alunosAprovados(array) {
  return array.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);