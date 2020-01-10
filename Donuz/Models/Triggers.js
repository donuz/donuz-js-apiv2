import {
    get,
    post,
    deleteRequest
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var triggers = {
    getScheduledTriggers: function () {
        return get('triggers', {
            'estabelecimento': config.estabelecimento_id,
            'Token': config.token
        });
    },
    scheduleTrigger: function (data) {
        return post('trigger', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        },data);
    },
    deleteTrigger: function (id) {
        return deleteRequest('trigger/' + id, {
            'Token': config.token
        });
    }
}