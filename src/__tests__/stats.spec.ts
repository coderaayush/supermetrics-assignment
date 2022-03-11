const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);
import nock from 'nock';
import axios from 'axios';
axios.defaults.adapter = require('axios/lib/adapters/http')
import { stubData } from '../stub/stubdata';

describe('Status Endpoint Response Test', () => {
    test('Should return status data', async () => {
        const scope = nock('https://api.supermetrics.com')
        .post('/assignment/register')
        .reply(200, {
            "meta": {
                "request_id": "Js4ilOAVtRQWJvff1vZCQl4aaq8LCO6u"
            },
            "data": {
                "client_id": "ju16a6m81mhid5ue1z3v2g0uh",
                "email": "contact@aayushmamgain.com",
                "sl_token": "smslt_8e44b2819ea317_3d920703e08f"
            }
        });
        
        let searchParams:any = { sl_token: 'smslt_8e44b2819ea317_3d920703e08f', page: 1 }
        
        const params = new URLSearchParams(searchParams);
        const postEndpointScope = nock('https://api.supermetrics.com')
        .get('/assignment/posts')
        .query(params)
        .reply(200, stubData);

        const res = await request.get('/api/stats').send();
        expect(res.statusCode).toEqual(200)
        const expectedOutput = {
            msg: 'Status populated successfully'
        } 
        expect(res.body.msg).toEqual(expectedOutput.msg);
        expect(res.body.data).not.toBeNull();
    
      scope.done();
      postEndpointScope.done();
    });

});
