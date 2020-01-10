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

describe('Scoring code requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return scoring code fields', () => {
        let custom= Donuz.scoringCode.getFields();
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return 200 to insert a scoring code', () => {
        let scoringCode=Donuz.scoringCode.insertCode('1234567898sdbdjkask',{})
        expect(scoringCode).to.be.an.instanceOf(Object);
    });
})