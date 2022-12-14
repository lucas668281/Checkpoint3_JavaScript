const { Aluno, Curso }= require("./curso")

  const curso = new Curso('DIGITAL HOUSE', 7, 3);
  
  const aluno1 = new Aluno('Lucas', 2, [10, 9, 7, 9]);
  const aluno2 = new Aluno('Pedro', 6, [9, 8, 3, 6]);
  const aluno3 = new Aluno('Joao', 1, [10, 3, 8, 7]);
  
  aluno1.aumentarFaltas();
  aluno2.aumentarFaltas();
  aluno3.aumentarFaltas();
  
  curso.adicionarAluno(aluno1);
  curso.adicionarAluno(aluno2);
  curso.adicionarAluno(aluno3);

  console.log(aluno1.notas);
  console.log(aluno1.mediaNotas());
  console.log(aluno1.faltas);
  console.log(curso.listaAlunos);
  console.log(curso.aprovado(aluno1));
  console.log(curso.alunosCursoAprovado());
