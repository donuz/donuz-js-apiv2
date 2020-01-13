"use strict";
const fetch= require('node-fetch');
import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
    Donuz
} from '../../Donuz'
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch=require('node-fetch')

describe('Clients requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return sign in object', () => {
        let signIn=Donuz.customer.signIn('teste','teste');
        expect(signIn).to.be.an.instanceOf(Object);
    });
    it('should return customer info object', () => {
        let clients= Donuz.customer.getInfoCustomer('token','12345678909');
        expect(clients).to.be.an.instanceOf(Object);
    });
    it('should return forgot password object', () => {
        let clients= Donuz.customer.forgotPassword('yan@donuz.co');
        expect(clients).to.be.an.instanceOf(Object);
    });
})