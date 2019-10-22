function validar_form_contato() {
    var nome = formcontato.nome.value;
    var email = formcontato.email.value;
    var assunto = formcontato.nome.assunto;
    var mensagem = formcontato.nome.mensagem;

    if(nome == ""){
        alert('Campo nome é obrigatório')
        formcontato.nome.focus
    }
    }