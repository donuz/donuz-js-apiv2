import {
    get,
    post,
    deleteRequest
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var whatsapp = {
   sendWhatsapp: function (data) {
        return post('whatsapp', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        },data);
    },
    sendWhatsappDinamically: function (data) {
        return post('whatsapp/dinamically/send', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        },data);
    }
}