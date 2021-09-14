/* Exportar para o consign conseguir enxergar a chamada dentro das rotas
 Trata toda a logica aplicada no Back-End*/
module.exports.home = function(application, req, res){
    /*Rendeniza a pagina chamada
     Passar o campo validação para não erro ao carregar a pagina, variavel validacao necessario para validar o nome ou apelido do usuario*/
    res.render("index", {validacao : {}});
};