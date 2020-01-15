import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))
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
