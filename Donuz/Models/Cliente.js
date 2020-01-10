"use strict";
import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var clients = {
    signIn: function (login, password) {
        let data = {
            'login': login,
            'senha': password
        };

        return post('clients/login', {
            'token': config.token,
            'estabelecimento': config.estabelecimento_id,

        }, data);
    },
    getInfoCustomer: function (tokenCliente, cpfCliente) {
        return get('client/' + cpfCliente, {
            'Token': config.token,
            'Token-Cliente': tokenCliente,
            'estabelecimento': config.estabelecimento_id
        });
    },
    signUp: function (data) {
        return post('clients', {
            'Token': config.token,
            'estabelecimento': config.estabelecimento_id
        }, data);
    },
    signInByEmail: function (login) {
        let data = {
            'login': login
        };

        return post('clients/loginOnlyEmail', {
            'Token': config.token,
            'estabelecimento': config.estabelecimento_id
        }, data);
    },
    updateCustomer: function (data, tokenCliente,id_cliente) {
        
        return put('clients', {
            'Token': config.token,
            'Token-Cliente ': tokenCliente,
            'estabelecimento': config.estabelecimento_id,
            'id_cliente':id_cliente
        }, data);
    },
    forgotPassword: function (email) {
        let data = {
            'email': email
        };

        return post('clients/forgotPassword', {
            'estabelecimento': config.estabelecimento_id,
            'Token': config.token
        }, data);
    }
}