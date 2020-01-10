import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var points = {
    getPointsExtract: function (tokenCliente) {
        return get('ponto/' + config.estabelecimento_id, {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        });
    },
    insertPoints: function (data) {
        data.acao = 'inserir';
        data.estabelecimento = config.estabelecimento_id;

        return post('ponto', {
            'Token': config.token
        }, data);
    }
}