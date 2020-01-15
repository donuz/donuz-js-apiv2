import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var points = {
    getPointsExtract: function (tokenCliente) {
        return get('points', {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'estabelecimento':config.estabelecimento_id
        });
    },
    insertPoints: function (data) {
    
        return post('points', null, data);
    }
}