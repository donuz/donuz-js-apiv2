import {
    get,
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var balance = {
    getCustomerBalance: function (tokenCliente) {
        return get('client/balance', {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'estabelecimento':config.estabelecimento_id
        });
    }
}