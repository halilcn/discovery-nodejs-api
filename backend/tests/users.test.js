import app from '../src/app';
import supertest from 'supertest';
import User from '../src/models/user';

const userData = {
  name: 'Halil',
  surname: 'Can',
  age: 20,
  gender: 'erkek'
};

test('POST /api/v1/users', async () => {
  await supertest(app)
    .post('/api/v1/users')
    .send(userData)
    .expect(201);
});

test('GET /api/v1/users', async () => {
  await User.create(userData);

  await supertest(app)
    .get('/api/v1/users')
    .expect(200);
});

test('SHOW /api/v1/users/:userId', async () => {
  const user = await User.create(userData);

  await supertest(app)
    .get(`/api/v1/users/${user._id}`)
    .expect(200);
});

test('UPDATE /api/v1/users/:userId', async () => {
  const user = await User.create(userData);
  userData.age = 21;

  await supertest(app)
    .put(`/api/v1/users/${user._id}`)
    .send(userData)
    .expect(200);
});

test('DELETE /api/v1/users/:userId', async () => {
  const user = await User.create(userData);

  await supertest(app)
    .delete(`/api/v1/users/${user._id}`)
    .expect(200);
});
