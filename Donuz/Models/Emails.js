import {
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var mails = {
    sendMail: function (data) {
        return post('contato', null , data);
    }
}
