const { expectCt } = require('helmet');
const healthController = require('../../src/infrastructure/controllers/health.controller');

jest
  .useFakeTimers()
  .setSystemTime(new Date('2012-12-05'));

describe('test health controller', () => {
    it('health controller up time', () => {
        expect(healthController()).toEqual({
            status: 200,
            uptime: 1354665600000
        })
    });
});
