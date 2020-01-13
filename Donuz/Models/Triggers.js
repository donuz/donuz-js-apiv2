import {
    get,
    post,
    deleteRequest
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var triggers = {
    getScheduledTriggers: function (fields=null,page=null,per_page=null) {
       
        fields=(fields!=null)?'fields='+fields:'';
        page=(page!=null)?'page='+page:'';
        per_page=(per_page!=null)?'per_page='+per_page:'';
        return get('triggers?'+fields+','+page+','+per_page, {
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