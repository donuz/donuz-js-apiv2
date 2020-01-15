import {
    get,
    post,
    deleteRequest
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var devices = {
    getDevicesByEstabelishment: function (fields=null,page=null,per_page=null) {
       
       fields=(fields!=null)?'fields='+fields:'';
       page=(page!=null)?'page='+page:'';
       per_page=(per_page!=null)?'per_page='+per_page:'';

        return get('devices?'+fields+','+page+','+per_page, {
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