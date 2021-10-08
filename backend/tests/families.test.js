import supertest from 'supertest';
import app from '../src/app';
import Family from '../src/models/family';
import faker from 'faker';

const generateFamily = () => {
  return {
    name: faker.name.lastName()
  };
};

test('POST /api/v1/families', async () => {
  await supertest(app)
    .post('/api/v1/families')
    .send(generateFamily())
    .expect(201);
});

test('GET /api/v1/families', async () => {
  await Family.create(generateFamily());

  await supertest(app)
    .get('/api/v1/families')
    .expect(200);
});

test('SHOW /api/v1/families/:familyId', async () => {
  const family = await Family.create(generateFamily());

  await supertest(app)
    .get(`/api/v1/families/${family._id}`)
    .expect(200);
});

test('UPDATE /api/v1/families/:familyId', async () => {
  const family = await Family.create(generateFamily());

  await supertest(app)
    .put(`/api/v1/families/${family._id}`)
    .send(generateFamily())
    .expect(200);
});

test('DELETE /api/v1/families/:familyId', async () => {
  const family = await Family.create(generateFamily());

  await supertest(app)
    .delete(`/api/v1/families/${family._id}`)
    .expect(200);
});


