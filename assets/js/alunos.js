var aluno = {};
var listaAlunos = {};

function adicionarAluno(){

    if ($("#nomeAluno").valid()) {
        aluno.nome = $("#nomeAluno").val();
    }else{
        $("#nomeAluno").addClass("is-invalid");
    }

    //aluno.nome = $("#nomeAluno").val();//com jquery
    aluno.nota1 = parseInt($("#primeiroBim").val());//com jquery
    aluno.nota2 = parseInt($("#segundoBim").val());//com jquery
    aluno.nota3 = parseInt($("#terceiroBim").val());//com jquery
    aluno.nota4 = parseInt($("#quartoBim").val());//com jquery
    aluno.total = calcularTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4);
    aluno.media = calcularMedia(aluno.total);
    aluno.situacao = calcularSituacao(aluno.media);

    console.log($("#nomeAluno").valid());
    console.log($("#formAdicionaAluno").validate());

    $(":input").val("");
    
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
        return innerHTML = '<span class="badge badge-success">APROVADO</span>';
    }else{
        return '<span class="badge badge-danger">REPROVADO</span>';
    }
}

function adicionarLinhaTabela(objeto){
    var tabela = document.querySelector('table');
    var tr = tabela.insertRow(1);
    tr.innerHTML = '<td>'+objeto.nome+'</td>'+
                    "<td>"+objeto.nota1+'</td>'+
                    "<td>"+objeto.nota2+'</td>'+
                    "<td>"+objeto.nota3+'</td>'+
                    "<td>"+objeto.nota4+'</td>'+
                    "<td>"+objeto.total+'</td>'+
                    "<td>"+objeto.media+'</td>'+
                    "<td>"+objeto.situacao+'</td>';
            
            $(":input").val("");
}