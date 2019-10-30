//Lendo arquivo ini em JS
const fs = require('fs');
const ini = require('ini');
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

var desenvolvimento = config.desenvolvimento;
var producao = config.producao;

console.log("Configurações padrão...");
console.log(config.producao);
console.log(config.desenvolvimento);

//Escrevendo em arquivo .ini
desenvolvimento.ip = '127.0.0.2';
desenvolvimento.porta = '4455';

producao.ip = '127.0.0.1';
producao.porta = '4040';
producao.novaChave = 'Esta é uma nova chave!';

//salva as modificações no arquivo .ini
fs.writeFileSync('./config.ini', ini.stringify(config))