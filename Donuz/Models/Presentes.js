import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var gifts = {
    getGift: function (idResgate, tokenCliente) {
        let headers = {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'Estabelecimento':config.estabelecimento_id
        };
        let resgate = get('gift/' + idResgate, headers);
        return resgate;
    },
    getGifts: function (tokenCliente) {
        let headers = {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'Estabelecimento':config.estabelecimento_id
        };
        let resgates = get('gifts', headers);

        return resgates;
    },
}