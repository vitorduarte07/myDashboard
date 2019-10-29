
const listaDeMateriais = ["Caneta", "Borracha","Lapis","Lapiseira","Caderno","Apontador","Regua","Mochila","Corretivo","LapisDeCor"];
var produto = {};
var listaProdutos = [];
const materialEscolar = document.getElementById('materialEscolar');

listaDeMateriais.forEach((material) => {
    option = new Option(material, material.toLowerCase());
    materialEscolar.options[materialEscolar.options.length] = option;   
  });

  $("#nomeAluno").focusout(function(){

    validarBotao();
    
});

$("#dinheiroGasto").focusout(function(){

    validarBotao();
    
});

function validarForm() {
    return $('#materialEscolar').valid() &&
           $("#quantidadeMaterial").valid() &&
           $("#precoUnitario").valid();
}

function adicionarOrcamento(){
    var formValido = validarForm();

    if(formValido){
        produto.material = $("#materialEscolar").val();
        produto.quantidade = $("#quantidadeMaterial").val();
        produto.valor = $("#precoUnitario").val();
        produto.total = calcularTotal(produto.quantidade, produto.valor);

        adicionarLinhaTabela(produto);

        produto = {};

        $(":input").val("");
    }else {
        feedbackFormValidacao();
    }
}


  function validarBotao(){
    
        if ($('#nomeAluno').val().length > 0 &&
            $('#dinheiroGasto').val().length > 0) {
            $("button[type=button]").prop("disabled", false);
        }
        else {
            $("button[type=button] ").prop("disabled", true);
        }

  }

  function validarInput(){
    if ($('#quantidadeMaterial').valid() && $('#precoUnitario').valid()) {
        $('#quantidadeMaterial').removeClass('is-invalid');
        $('#precoUnitario').removeClass('is-invalid');
    } else {
        $('#quantidadeMaterial').addClass('is-invalid');
        $('#precoUnitario').addClass('is-invalid');
    }
  }

  function calcularTotal(quantidadeMaterial, precoUnitario){
    return quantidadeMaterial * precoUnitario;
  }

  function adicionarLinhaTabela(objeto) {
    var tabela = document.querySelector("table");
    var tr = tabela.insertRow();
    tr.innerHTML = "<td>" + objeto.material + "</td>" +
        "<td>" + objeto.quantidade + "</td>" +
        "<td>" + objeto.valor + "</td>" +
        "<td>  <button type='button' class='btn btn-info btn-sm' onclick='deletarLinha(this)'>X</button> " + objeto.total + "</td>";

        toastr.success('Orçamento incluido com sucesso');
}

function deletarLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.querySelector('table').deleteRow(i);
    toastr.info('Material excluido com sucesso');
    //document.getElementById('tableAlunos').deleteRow(index)
}

function feedbackFormValidacao() {

    if ($('#nomeAluno').valid()) {
        $('#nomeAluno').removeClass('is-invalid');
    } else {
        $('#nomeAluno').addClass('is-invalid');
    }
}

