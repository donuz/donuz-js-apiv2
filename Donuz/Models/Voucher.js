import {
    post
} from '../Requisitions';
var path= require('path');
var config = (sessionStorage.getItem('estabelecimento')!=null)?sessionStorage.getItem('estabelecimento'):require(require('../../donuz-config/config.json'))

export var voucher = {
    updateStatusVoucher: function (codigoVoucher, statusVoucher) {

        let data = {
            'voucher': codigoVoucher,
            'status': statusVoucher
        };

        return post('voucher', {
            'Token': config.token
        }, data);
    }
}