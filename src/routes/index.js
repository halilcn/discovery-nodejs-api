import express from 'express';
import usersRoute from "./v1/users";
import familiesRoute from "./v1/families";
import rolesRoute from "./v1/roles";
import familiesUsersRoute from "./v1/familiesUsers";

var app = express();


//Todo:Helper class ?
const bindFamilyId = (req, res, next) => {
    req.familyId = req.params.familyId;
    next();
};

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/families', familiesRoute);
app.use('/api/v1/roles', rolesRoute);
app.use('/api/v1/families/:familyId/users', bindFamilyId, familiesUsersRoute);

export default app;
