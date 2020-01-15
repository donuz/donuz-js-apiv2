import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var estabelishment = {
    getInfoStore: function () {
        return get('estabelishment', {
            'Token': config.token,
            'estabelecimento':config.estabelecimento_id
        });
    }
}