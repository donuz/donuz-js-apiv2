import {
    get
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var settings = {
    getSettings: function () {
        return get('settings');
    }
}