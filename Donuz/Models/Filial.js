import {
    get,
    post
} from '../Requisitions';
var path= require('path');

export var branch = {
    getBranchs: function () {
        return get('/estabelishment/branchs');
    },
    getBranchByID: function (idParceiro) {
        return get('/estabelishment/branchs/' + idParceiro);
    }
}