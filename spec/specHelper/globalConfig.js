import nock from 'nock';

nock.disableNetConnect();

global.NOCK_SCOPE = 'http://localhost:3000';
global.ENDPOINT = '';
