import {
    get,
    post,
    deleteRequest
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var notification = {
   sendNotification: function (data) {
        return post('notification', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        },data);
    }
}