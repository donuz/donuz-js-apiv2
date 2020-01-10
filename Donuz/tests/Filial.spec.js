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

describe('Branch requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return branch object', () => {
        let custom= Donuz.branch.getBranchByID(1);
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return branch object by tag', () => {
        let branch=Donuz.branch.getBranchByTag('tag');
        expect(branch).to.be.an.instanceOf(Object);
    });
    it('should return branches', () => {
        let branch= Donuz.branch.getBranchs();
        expect(branch).to.be.an.instanceOf(Object);
    });
})