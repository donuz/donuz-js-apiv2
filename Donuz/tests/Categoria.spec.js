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

describe('Categories requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return all estabelishment category', () => {
        let custom= Donuz.category.getCategories();
        expect(custom).to.be.an.instanceOf(Object);
    });
    it('should return category object', () => {
        let category=Donuz.category.getInfoCategory(1)
        expect(category).to.be.an.instanceOf(Object);
    });
    it('should return subcategory info object', () => {
        let subcategory= Donuz.category.getSubCategories(1)
        expect(subcategory).to.be.an.instanceOf(Object);
    });
})