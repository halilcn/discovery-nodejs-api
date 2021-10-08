import supertest from 'supertest';
import app from '../src/app';
import Family from '../src/models/family';
import User from '../src/models/user';
import Role from '../src/models/role';
import FamilyUser from '../src/models/familyUser';
import faker from 'faker';

const generateFamily = () => {
  return {
    name: faker.name.lastName()
  };
};

const generateUser = () => {
  return {
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    age: 20,
    gender: 'erkek'
  };
};

const generateRole = () => {
  return {
    name: faker.name.jobTitle()
  };
};

test('POST /api/v1/families/:familyId/users', async () => {
  const family = await Family.create(generateFamily());
  const user = await User.create(generateUser());
  const role = await Role.create(generateRole());

  const familyUserData = {
    user: user._id,
    role: role._id
  };

  await supertest(app)
    .post(`/api/v1/families/${family._id}/users`)
    .send(familyUserData)
    .expect(201);
});

test('GET /api/v1/families/:familyId/users', async () => {
  const family = await Family.create(generateFamily());
  const user = await User.create(generateUser());
  const role = await Role.create(generateRole());

  const familyUserData = {
    user: user._id,
    role: role._id,
    family: family._id
  };

  await FamilyUser.create(familyUserData);

  await supertest(app)
    .get(`/api/v1/families/${family._id}/users`)
    .expect(200);
});

test('SHOW /api/v1/families/:familyId/users/:userId', async () => {
  const family = await Family.create(generateFamily());
  const user = await User.create(generateUser());
  const role = await Role.create(generateRole());

  const familyUserData = {
    user: user._id,
    role: role._id,
    family: family._id
  };

  await FamilyUser.create(familyUserData);

  await supertest(app)
    .get(`/api/v1/families/${family._id}/users/${user._id}`)
    .expect(200);
});

test('UPDATE /api/v1/families/:familyId/users/:userId', async () => {
  const family = await Family.create(generateFamily());
  const user = await User.create(generateUser());
  const role = await Role.create(generateRole());

  const familyUserData = {
    user: user._id,
    role: role._id,
    family: family._id
  };

  await FamilyUser.create(familyUserData);

  const newRole = await Role.create(generateRole());
  const familyUserNewData = {
    role: newRole._id
  };

  await supertest(app)
    .put(`/api/v1/families/${family._id}/users/${user._id}`)
    .send(familyUserNewData)
    .expect(200);
});

test('DELETE /api/v1/families/:familyId/users/:userId', async () => {
  const family = await Family.create(generateFamily());
  const user = await User.create(generateUser());
  const role = await Role.create(generateRole());

  const familyUserData = {
    user: user._id,
    role: role._id,
    family: family._id
  };

  await FamilyUser.create(familyUserData);

  await supertest(app)
    .delete(`/api/v1/families/${family._id}/users/${user._id}`)
    .expect(200);
});
