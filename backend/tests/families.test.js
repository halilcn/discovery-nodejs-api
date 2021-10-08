import supertest from 'supertest';
import app from '../src/app';
import Family from '../src/models/family';
import faker from 'faker';

const generateLastname = () => {
  return faker.name.lastName();
};

test('POST /api/v1/families', async () => {
  await supertest(app)
    .post('/api/v1/families')
    .send({ name: generateLastname() })
    .expect(201);
});

test('GET /api/v1/families', async () => {
  await Family.create({ name: generateLastname() });

  await supertest(app)
    .get('/api/v1/families')
    .expect(200);
});

test('SHOW /api/v1/families/:familyId', async () => {
  const family = await Family.create({ name: generateLastname() });

  await supertest(app)
    .get(`/api/v1/families/${family._id}`)
    .expect(200);
});

test('UPDATE /api/v1/families/:familyId', async () => {
  const family = await Family.create({ name: generateLastname() });
  const familyNewData = {
    name: generateLastname()
  };

  await supertest(app)
    .put(`/api/v1/families/${family._id}`)
    .send(familyNewData)
    .expect(200);
});

test('DELETE /api/v1/families/:familyId', async () => {
  const family = await Family.create({ name: generateLastname() });

  await supertest(app)
    .delete(`/api/v1/families/${family._id}`)
    .expect(200);
});


