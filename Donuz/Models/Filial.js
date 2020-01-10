import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var branch = {
    getBranchByTag: function (tag) {
        let data = {
            'acao': 'buscar',
            'estabelecimento': config.estabelecimento_id,
            'tag': tag
        };

        return post('filial', {
            'Token': config.token
        }, data);
    },
    getBranchs: function () {
        return get('filial/' + config.estabelecimento_id, {
            'Token': config.token
        });
    },
    getBranchByID: function (idParceiro) {
        return get('filial/' + config.estabelecimento_id + '/' + idParceiro, {
            'Token': config.token
        });
    }
}