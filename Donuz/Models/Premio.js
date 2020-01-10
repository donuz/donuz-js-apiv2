import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var prizes= {
    getRewards:function(order = null, limit = null)
    {
        return get('prizes', {'Token':config.token,'estabelecimento': config.estabelecimento_id,'Order':(order)?order:'', 'Limit':(limit)?limit:''});
    },getRewardByBranch:function(idFilial, order = null, limit = null)
    {
        let data = {'acao' : 'buscar', 'estabelecimento' :config.estabelecimento_id, 'filial' :idFilial};

        return post('premio', {'Token':config.token, 'Order':(order)?order:'', 'Limit':(limit)?limit:''}, data);
    },getRewardByTag(tag, order = null, limit = null)
    {
        let data = { 'tag' : tag};

        return post('prizes', {'Token': config.token,'Order':(order)?order:'', 'Limit':((limit)?limit:''),'estabelecimento' : config.estabelecimento_id}, data);
    },getInfoReward:function(idPremio, order = null, limit = null)
    {
        return get('prize/'+idPremio, {'Token':config.token, 'Order':(order)?order:'', 'Limit':((limit)?limit:''),'estabelecimento' : config.estabelecimento_id});
    },getRewardByCategory:function(categ, subcateg = null, tag = null, order = null, limit = null)
    {
        let data = {'idcategoria' : categ};
        if (subcateg!=null) {
            data.idsubcategoria = subcateg;
        }
        if (tag!=null) {
            data.tag = tag;
        }

        return post('prizes', {'estabelecimento' : config.estabelecimento_id,'Token':config.token, 'Order':(order)?order:'', 'Limit':(limit)?limit:''}, data);
    },searchRewards:function(termo, tag = null, desc = null, order = null, limit = null)
    {
        let data = { 'premio' : termo};
        if (tag!=null) {
            data.tag = tag;
        }
        if (desc!=null) {
            data.descricao = desc;
        }

        return post('prizes', {'Token':config.token,'estabelecimento' : config.estabelecimento_id ,'Order':(order)?order:'', 'Limit':(limit)?limit:''}, data);
    }
}