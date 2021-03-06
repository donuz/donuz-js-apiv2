import {
    get,
    post,
    deleteRequest
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var notification = {
   sendNotification: function (data) {
        return post('notification', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        },data);
    },
    sendNotificationDinamically: function (data) {
        return post('notification/dinamically/send', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        },data);
    }
}