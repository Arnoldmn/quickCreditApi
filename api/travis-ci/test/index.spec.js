const expect = require('chai').expect
const server = require('../index');

describe('test', function () {
    it('Should return a string', function () {
        expect('ci with travis').to.equal('ci with travis');
    });
});