/** @format */

const express = require('express')
const morgan = require('morgan') //morgan is a function which return a middleware function
const path = require('path')

const app = express()

app.use(morgan('combined'))

app.get('/search', (req, res) => {
    console.log(req.query.q) //graps query from ...../search?q=bla
    res.send('Welcome')
})

//404 middleware; this must be the last middleware, since the next function is not called ==> order of the middleware stack is important
app.use((req, res) => {
    res.status(404).send('Page not found')
})

app.listen(3000, () => {
    console.log('App starting on port 3000')
})
