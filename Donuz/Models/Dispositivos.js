import {
    get,
    post,
    deleteRequest
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var devices = {
    getDevicesByEstabelishment: function () {
       
        return get('devices', {
            'estabelecimento': config.estabelecimento_id,
            'Token': config.token
        });
    },
    insertDevice: function (data) {
        return post('device', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        },data);
    },
    deleteDevice: function (playerId) {
        return deleteRequest('device/' + playerId, {
            'Token': config.token
        });
    }
}