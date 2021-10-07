import supertest from 'supertest';
import app from '../src/app';
import Family from '../src/models/family';

//Todo: Faker.js ile random name.

test('POST /api/v1/families', async () => {
  await supertest(app)
    .post('/api/v1/families')
    .send({ name: 'can121' })
    .expect(201);
});

test('GET /api/v1/families', async () => {
  await Family.create({ name: 'öz' });

  await supertest(app)
    .get('/api/v1/families')
    .expect(200);
});

test('SHOW /api/v1/families/:familyId', async () => {
  const family = await Family.create({ name: 'test12' });

  await supertest(app)
    .get(`/api/v1/families/${family._id}`)
    .expect(200);
});

test('UPDATE /api/v1/families/:familyId', async () => {
  const family = await Family.create({ name: 'tadasdas' });
  const newFamilyData = {
    name: 'Şekercioğlu2'
  };

  await supertest(app)
    .put(`/api/v1/families/${family._id}`)
    .send(newFamilyData)
    .expect(200);
});

test('DELETE /api/v1/families/:familyId', async () => {
  const family = await Family.create({ name: 'testasdas' });

  await supertest(app)
    .delete(`/api/v1/families/${family._id}`)
    .expect(200);
});


