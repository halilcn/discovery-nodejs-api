import supertest from 'supertest';
import app from '../src/app';
import Role from '../src/models/role';
import faker from 'faker';

const generateRole = () => {
  return faker.name.jobTitle();
};

test('POST /api/v1/roles', async () => {
  await supertest(app)
    .post('/api/v1/roles')
    .send({ name: generateRole() })
    .expect(201);
});

test('GET /api/v1/roles', async () => {
  await Role.create({ name: generateRole() });

  await supertest(app)
    .get('/api/v1/roles')
    .expect(200);
});

test('SHOW /api/v1/roles/:roleId', async () => {
  const role = await Role.create({ name: generateRole() });

  await supertest(app)
    .get(`/api/v1/roles/${role._id}`)
    .expect(200);
});

test('UPDATE /api/v1/roles/:roleId', async () => {
  const role = await Role.create({ name: generateRole() });
  const roleNewData = {
    name: generateRole()
  };

  await supertest(app)
    .put(`/api/v1/roles/${role._id}`)
    .send(roleNewData)
    .expect(200);
});

test('DELETE /api/v1/roles/:roleId', async () => {
  const role = await Role.create({ name: generateRole() });

  await supertest(app)
    .delete(`/api/v1/roles/${role._id}`)
    .expect(200);
});
