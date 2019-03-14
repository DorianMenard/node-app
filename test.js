import test from 'ava';
var nock = require('nock');
const { getVilleData } = require('./getvilledata.js');
 
test('foo', t => {
    t.pass();
});
 
test('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
    t.pass('form');
});

test('geocode is not down', async (t) => {
   nock('http://geocode.xyz')
   .get('paris?json=1')
   .reply(200, 'test ok');
const res = await getVilleData();
t.is(res.status, 200);
});

