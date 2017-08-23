import * as Discord from "discord.js";
import * as request from "request";

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content != '') {
    var message = msg.content.split(" ");	
    {
      switch (message[0]) {
        case '!sendGet': {
          request.get(message[1]).on('response', function(response) {
                msg.reply('Ответ сервера, код: ' + response.statusCode);
                msg.reply('Ответ сервера, тело: ' + response);
                console.log(response.body);
              })
              .on('error', function(err) {
                msg.reply('Ответ сервера, ошибка: ' + err);
              });
          break;
        }
        case '!sendPost': {
          request.post(message[1]).on('response', function(response) {
              msg.reply('Ответ сервера, код: ' + response.statusCode);
              msg.reply('Ответ сервера, тело: ' + response);
              console.log(response.body);
            })
            .on('error', function(err) {
              msg.reply('Ответ сервера, ошибка: ' + err);
            });
          break;
        }
        default:
          break;
      }
    }
  }
});

client.login('MzQ5MjgzMjc1NTM1MDI0MTM1.DH-MpQ.6vOhDUzAsU8IvkruRs08JsqUzuk');