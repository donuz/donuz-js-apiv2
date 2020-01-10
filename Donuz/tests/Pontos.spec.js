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

describe('Points requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return the poins extratct', () => {
        let custom= Donuz.point.getPointsExtract('dsdasasdds');
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return status to insert points', () => {
        let point=Donuz.point.insertPoints({})
        expect(point).to.be.an.instanceOf(Object);
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