/* Importar as configuyrações do servidor *server.js*/
var app = require('./config/server');

/* Parametrizar a porta de escuta que o servidor irá executar*/
var server = app.listen(3000, function(){
    console.log('Servidor Online');
});

/* Importar o protocolo SOCKET.IO e setar o listen da variavel server para ser executado o protocolo socket na mesma porta
 Servidor responde a 2 protocolos diferentes na mesma porta*/
var io = require('socket.io').listen(server);

/* Coloca no escopo um nome e valor de uma variavel a tornando global *Não utlizar nome pré definidos**/
app.set('io', io);

/* Criar a conexão por WebSocket 
on - Ouvindo pedidos de execução
emit - Pedido para executar alguma acao
*/

io.on('connection', function(socket){
    console.log('Usuario conectou');

    socket.on('disconnect', function(){
        console.log('Usuario Desconectou');
    });

    /* Ouvindo caso o cliente de um emit e chama essa função no servidor para ele tratar e distribuir como desejar*/
    socket.on('msgParaServidor', function(data){

        /* Eventos de Dialogo*/ 
        //Responde apenas para o cliente que enviou a requisição
        socket.emit(
            'msgParaCliente',
            { apelido : data.apelido, mensagem : data.mensagem}
        );
        // Responde a todos os clientes, menos quem enviou a requisição
        socket.broadcast.emit(
            'msgParaCliente',
            { apelido : data.apelido, mensagem : data.mensagem}
        );
        
        /* Eventos Usuarios */
        //Verifica se já foi emitido o nome do usuario no CHAT
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            //Responde apenas para o cliente que enviou a requisição
            socket.emit(
                'participantesParaCliente',
                { apelido : data.apelido}
            );
            // Responde a todos os clientes, menos quem enviou a requisição
            socket.broadcast.emit(
                'participantesParaCliente',
                { apelido : data.apelido}
            );
        };
    });
});