import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var rescues = {
    redeemRewards: function (tokenCliente, data) {
        return post('reward', {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'estabelecimento':config.estabelecimento_id
        }, data);
    },
    getRedeemption: function (idResgate, tokenCliente) {
        return get('redeemptions/'+ idResgate, {
                'Token': config.token,
                'Token-Cliente': tokenCliente,
                'estabelecimento':config.estabelecimento_id
            });
    },
    getRedeemptionsByCustomer: function (tokenCliente) {
        return get('redeemptions/', {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'estabelecimento':config.estabelecimento_id
        });
    }
}