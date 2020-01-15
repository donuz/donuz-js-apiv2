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
    it('should return trigger object', () => {
        let custom= Donuz.triggers.getScheduledTriggers()
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return trigger saved object', () => {
        let custom= Donuz.triggers.scheduleTrigger({})
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return trigger deleted object', () => {
        let custom= Donuz.triggers.deleteTrigger(1);
        expect(custom).to.be.an.instanceOf(Object);
    });
})