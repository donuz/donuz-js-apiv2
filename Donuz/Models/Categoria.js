import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))
export var categories= {
    getCategories: function() {
        return get('prizes/categories');
    },
    getInfoCategory: function (idCategoria) {    
        return get('prizes/category/'+idCategoria);
    },
    getSubCategories: function (idCategoria) {
        return get('prizes/subcategories/' + idCategoria, {'token': config.token});
    }
}
