import {
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var computableCode = {
    getFields: function () {
        return get('computableCode/settings', {
            'Token': config.token,
            'estabelecimento': config.estabelecimento_id
        }, data);
    },
    insertCode: function (tokenCliente, data) {
        return post('computableCode', {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'estabelecimento':config.estabelecimento_id
        }, data);
    }
}