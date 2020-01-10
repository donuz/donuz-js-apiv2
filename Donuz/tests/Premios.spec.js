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

describe('Prizes requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return prize object', () => {
        let custom= Donuz.prizes.getInfoReward(1);
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return prizes by branch', () => {
        let prizes=Donuz.prizes.getRewardByBranch(1);
        expect(prizes).to.be.an.instanceOf(Object);
    });
    it('should return prizes by category', () => {
        let clients= Donuz.prizes.getRewardByCategory(3)
        expect(clients).to.be.an.instanceOf(Object);
    });
    it('should return rewards by tag', () => {
        let prizes= Donuz.prizes.getRewardByTag('teste');
        expect(prizes).to.be.an.instanceOf(Object);
    });
    it('should return rewards', () => {
        let prizes= Donuz.prizes.getRewards();
        expect(prizes).to.be.an.instanceOf(Object);
    });
    it('should return rewards searched', () => {
        let prizes= Donuz.prizes.searchRewards('teste');
        expect(prizes).to.be.an.instanceOf(Object);
    });
})