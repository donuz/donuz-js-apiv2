import {
    get
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var settings = {
    getSettings: function () {
        return get('settings');
    }
}