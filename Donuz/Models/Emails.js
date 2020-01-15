import {
    post
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var mails = {
    sendMail: function (data) {
        return post('contact', null , data);
    }
}
