import {
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var mails = {
    sendMail: function (data) {
        data.acao = 'enviar';
        data.estabelecimento = config.estabelecimento_id;

        return post('contato', {
            'Token': config.token
        }, data);
    }
}