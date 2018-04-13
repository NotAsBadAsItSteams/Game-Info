const request = require('supertest');
const app = require('../../server/server');

describe('server', () => {
  test('responds to /info/:id/related with 200 status', () => (
    request(app)
      .get('/info/5')
      .expect(200)
  ));

  test('responds to non-existant routes with 404', () => (
    request(app)
      .get('/sup')
      .expect(404)
  ));
});
