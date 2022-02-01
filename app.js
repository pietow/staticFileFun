/** @format */

const express = require('express')
const morgan = require('morgan') //morgan is a function which return a middleware function
const path = require('path')

const app = express()

app.use(morgan('combined'))

app.get(/^\/users\/(\d+)-(\d+)$/, (req, res) => { //use regex with capture group
    const startId = parseInt(req.params[0], 10) //get capture group
    const endId = parseInt(req.params[1], 10)
    console.log(startId)
    console.log(endId)
    res.send('Welcome')
})

//404 middleware; this must be the last middleware, since the next function is not called ==> order of the middleware stack is important
app.use((req, res) => {
    res.status(404).send('Page not found')
})

app.listen(3000, () => {
    console.log('App starting on port 3000')
})
