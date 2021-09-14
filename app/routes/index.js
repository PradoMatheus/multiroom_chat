/*Exportar para o consign conseguir enxergar na inicialização do servidor e efetuar o autoload da rota*/
module.exports = function(application){
    /*Descreve qual é metodo de comunicação http e o diretorio do browser *'/'* - GET*/
    application.get('/', function(req, res){
        /* Chama a função da controller home que foi exportada pelo consign*/
        application.app.controllers.index.home(application, req, res);
    });
};