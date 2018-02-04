const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == '!fundador') {
        message.channel.sendMessage('Maneka -> http://steamcommunity.com/id/manekaofical');
    }
    if(message.content == '!comandos') {
        message.channel.sendMessage('Comandos do Bot');
        message.channel.sendMessage('!fundador - Adiciona o Maneka!                                                                                                                                                                                                      !siteaposta - Conhece o melhor site de apostas do mundo![OFFLINE]                                                                                                                                                                                                      !discord - Partilha com todos os teus amigos.                                                                                                                                                                                                      !grupo - Grupo da Comunidade na steam!                                                                                                                                                                                                      !precovip - Preço dos VIP                                                                                                                                                                                                      !vantagensvip - Vantagens que podes ter!                                                                                                                                                                                                      !staff - Conhece os membros da Staff!');
    }
    if(message.content == '!siteaposta') {
        message.channel.sendMessage('Melhor site de apostas do mundo: https://www.csgobetnwin.com');
    }
    if(message.content == '!discord') {
        message.channel.sendMessage('Convida todos os teus amigos para o servidor! https://discord.gg/gkP2c6w');
    }
    if(message.content == '!grupo') {
        message.channel.sendMessage('Junta te a nós! http://steamcommunity.com/groups/azoresmadeiracommunity');
    }
    if(message.content == '!precovip'){
        message.channel.sendMessage('Preços VIP http://steamcommunity.com/groups/azoresmadeiracommunity/discussions/0/1488866813761744821/');
    }
    if(message.content == '!vantagensvip'){
        message.channel.sendMessage('Vantagens VIP http://steamcommunity.com/groups/azoresmadeiracommunity/discussions/0/1473095965299908142/');
    }
    if(message.content == '!staff'){
        message.channel.sendMessage('Conhece os membros da Staff! http://steamcommunity.com/groups/azoresmadeirastaff')
    }
});

bot.login(process.env.BOT_TOKEN);
