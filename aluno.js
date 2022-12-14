let aluno = {
  nome: "",
  totalFaltas: 0,
  notas: [ 10,5,6,7,1 ],
  mediaNotas: function() {
      // Calcular a média aqui
  },
  aumentarFaltas: function() {
      // Aumentar as faltas aqui
  },
}

class Aluno {
    constructor(nome, faltas, notas) {
      this.nome = nome;
      this.faltas = faltas;
      this.notas = notas;
    }
  
    mediaNotas() {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
    soma += this.notas[i];
   }
    return soma / this.notas.length;
   }
  
   aumentarFaltas() {
    this.faltas +=1;
   };
  }

  module.exports = { Aluno }
  


























//   const joao = new Aluno('João', 3, [6, 7, 9, 5]);
//   const lucas = new Aluno('lucas', 1, [6, 10, 9, 7]);
//   const gustavo = new Aluno('gustavo', 5, [4, 8, 3, 5]);
//   const pedro = new Aluno('pedro', 2, [3, 9, 10, 3]);

//   let listaAlunos = [
//     joao,
//     lucas,
//     gustavo,
//     pedro
//   ];
  
//   joao.aumentarFaltas()
// // console.log(joao.mediaNotas()); // 6.75
// // console.log(joao.faltas);// 4

// // module.exports = { Aluno, listaAlunos };

// // console.log(Aluno);
// // console.log(listaAlunos);