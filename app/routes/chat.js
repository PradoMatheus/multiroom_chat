/*Exportar para o consign conseguir enxergar na inicialização do servidor e efetuar o autoload da rota*/
module.exports = function(application){
    /*Descreve qual é metodo de comunicação http e o diretorio do browser *'/chat'* - POST*/
    application.post('/chat', function(req, res){
        /* Chama a função da controller chat que foi exportada pelo consign*/
        application.app.controllers.chat.iniciarChat(application, req, res);
    });
    /*Descreve qual é metodo de comunicação http e o diretorio do browser *'/chat'* - GET*/
    application.get('/chat', function(req, res){
        /* Chama a função da controller chat que foi exportada pelo consign*/
        application.app.controllers.chat.iniciarChat(application, req, res);
    });
};