import supertest from 'supertest';
import app from '../src/app';
import Role from '../src/models/role';
import faker from 'faker';

const generateRole = () => {
  return {
    name: faker.name.jobTitle()
  };
};

test('POST /api/v1/roles', async () => {
  await supertest(app)
    .post('/api/v1/roles')
    .send(generateRole())
    .expect(201);
});

test('GET /api/v1/roles', async () => {
  await Role.create(generateRole());

  await supertest(app)
    .get('/api/v1/roles')
    .expect(200);
});

test('SHOW /api/v1/roles/:roleId', async () => {
  const role = await Role.create(generateRole());

  await supertest(app)
    .get(`/api/v1/roles/${role._id}`)
    .expect(200);
});

test('UPDATE /api/v1/roles/:roleId', async () => {
  const role = await Role.create(generateRole());

  await supertest(app)
    .put(`/api/v1/roles/${role._id}`)
    .send(generateRole())
    .expect(200);
});

test('DELETE /api/v1/roles/:roleId', async () => {
  const role = await Role.create(generateRole());

  await supertest(app)
    .delete(`/api/v1/roles/${role._id}`)
    .expect(200);
});
