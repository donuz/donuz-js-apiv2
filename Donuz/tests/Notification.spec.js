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

describe('Push notification requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return notification success object', () => {
        let custom= Donuz.notification.sendNotification({});
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return notification sended dinamically object', () => {
        let custom= Donuz.notification.sendNotificationDinamically({});
        expect(custom).to.be.an.instanceOf(Object);
    });
})