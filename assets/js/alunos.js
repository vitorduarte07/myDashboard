var aluno = {};
var listaAlunos = {};

function adicionarAluno(){
    aluno.nome = $("#nomeAluno").val();//com jquery
    aluno.nota1 = parseInt($("#primeiroBim").val());//com jquery
    aluno.nota2 = parseInt($("#segundoBim").val());//com jquery
    aluno.nota3 = parseInt($("#terceiroBim").val());//com jquery
    aluno.nota4 = parseInt($("#quartoBim").val());//com jquery
    aluno.total = calcularTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.media = calcularMedia(aluno.total);
    aluno.situacao = calcularSituacao(aluno.media);
    
    adicionarLinhaTabela(aluno);
}

function calcularTotal(nota1, nota2, nota3, nota4){
    return nota1 + nota2 + nota3 + nota4;
}

function calcularMedia(valor){
    return valor/4;
}

function calcularSituacao(media){
    const MEDIA_APROVACAO = 7;
    if (media >= MEDIA_APROVACAO) {
        return 'APROVADO';
    }else{
        return 'REPROVADO';
    }
}

function adicionarLinhaTabela(objeto){
    console.log(objeto);
    var tabela = $('#listagemAlunos');
    console.log(tabela);
}