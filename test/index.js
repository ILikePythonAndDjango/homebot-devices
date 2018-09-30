// var mocha = require('mocha')
// var describe = mocha.describe

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./app');
const responseHelper = require('./helpers/response');
const mongoose = require('mongoose');

const should = chai.should();
chai.use(chaiHttp);

describe('Index', () => {

    describe('/GET index', () => {
        it('it should GET message ok', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    responseHelper.assertObject(res, { 'message': 'Ok' });
                    done();
                });
        });
    });

    describe('/GET unexisting page', () => {
        it('it should return 404', (done) => {
            chai.request(app)
                .get('/unexisting')
                .end((err, res) => {
                    responseHelper.assertNotFound(err, res);
                    done();
                });
        });
    });

});