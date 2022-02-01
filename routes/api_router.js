/** @format */

const express = require('express')

const ALLOWED_IPS = ['127.0.0.1', '123.456.7.89', '::1'] //IPv4 and last is IPv6---> ::1 stands for localhost

const api = express.Router()

api.use(function (req, res, next) {
    //Middelware is only valid for this subroute
    const userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1
    if (!userIsAllowed) {
        res.status(401).send('Not authorized!')
        console.log(req.ip)
    } else {
        next()
    }
})

api.get('/users', (req, res) => {
    res.send('Access Granted!')
})

module.exports = api
