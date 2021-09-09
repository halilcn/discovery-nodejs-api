import './bootstrap';

import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from "helmet";

import routerIndex from './routes/index';
import usersRoute from './routes/v1/users';
import familiesRoute from './routes/v1/families';
import rolesRoute from './routes/v1/roles';
import familiesUsersRoute from './routes/v1/familiesUsers';


var app = express();

//Use middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//Use Helmet
app.use(helmet());

import 'routes/index.js'

/*//Todo:Helper class ?
const bindFamilyId = (req, res, next) => {
    req.familyId = req.params.familyId;
    next();
};

app.use('/api/v1/users', usersRoute);
app.use('/api/v1/families', familiesRoute);
app.use('/api/v1/roles', rolesRoute);
app.use('/api/v1/families/:familyId/users', bindFamilyId, familiesUsersRoute);*/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = process.env.APP_ENVIRONMENT === 'development' ? err : {}

    console.log(err)

    res.status(err.status || 500)
    res.send(
        process.env.APP_ENVIRONMENT === 'development'
            ? {stack: err.stack, message: err.message}
            : {message: err.message}
    )
});

module.exports = app;
