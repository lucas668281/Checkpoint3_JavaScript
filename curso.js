const {Aluno}= require("./aluno")

class Curso  {
    constructor(nome, notaDeAprovacao, faltasMaximas){  
    this.nome = nome;
    this.notaDeAprovacao = notaDeAprovacao,
    this.faltasMaximas = faltasMaximas,
    this.listaAlunos = [] 
    };
  
    adicionarAluno (alunos) {
      this.listaAlunos.push(alunos);
    };
    
    aprovado(aluno)  {
      if (aluno.faltas < this.faltasMaximas && aluno.mediaNotas() >= this.notaDeAprovacao) {
        return true;
      } else if (aluno.faltas === this.faltasMaximas && aluno.mediaNotas() > (this.notaDeAprovacao * 1.10)) {
        return true;
      } else {
        return false;
      }
    }

    alunosCursoAprovado(){    
      return this.listaAlunos.map((aluno) => this.aprovado(aluno));
    };
    };

    module.exports = { Aluno, Curso }





  












  

















