/* Exportar para o consign conseguir enxergar a chamada dentro das rotas
 Trata toda a logica aplicada no Back-End*/
module.exports.iniciarChat = function(application, req, res){
    /* Pega todos os campos contendo os valores em formato Json que estão dentro do form*/
    var dadosForm = req.body;
    
    /* Validar os campos trazidos pelo request do formulario
     o Express busca pelo name no formulario e otimiza as validações*/
    req.assert('apelido', 'Nome ou Apelido é obrigatorio').notEmpty();
    req.assert('apelido', 'Nome ou Apelido deve conter entre 3 e 15 caracteres').len(3,15);

    /* Recuperar os erros casos eles existam*/
    var erros = req.validationErrors();

    /* Validando se existe erros no formulario*/
    if(erros){
        res.render("index", {validacao : erros});
        return;
    }
    /*emit - Pedido para executar alguma acao 
     recupera o objeto global emitido no app.js*/
    application.get('io').emit(
        'msgParaCliente',
        {apelido : dadosForm.apelido, mensagem : 'acabou de entrar no Chat'}
    );

    /* Rendeniza a pagina chamada*/
    res.render("chat",{dadosForm: dadosForm});
}