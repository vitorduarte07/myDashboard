
const EMAIL_VALIDACAO = 'admin@email.com.br';
const SENHA_VALIDACAO = '123logar';

function efetuarLogin() {

    if ($('#emailUsuario').val() == EMAIL_VALIDACAO && $('#senhaUsuario').val() == SENHA_VALIDACAO) {
        toastr.success('Conta logada com sucesso!');
        setTimeout(function(){
            document.location.href = 'index.html';         
            }, 5000);
        
    }else if ($('#senhaUsuario').val() != SENHA_VALIDACAO) {
        toastr.error('Senha incorreta');
    }
    else {
        toastr.error('e-mail incorreto!');
    }
}
