/** @format */

const express = require('express')
const morgan = require('morgan') //morgan is a function which return a middleware function 
const path = require('path')

const app = express()

app.use(morgan('combined'))
app.use((req, res, next) => {
    console.log(req.method)
    console.log(req.rawHeaders)
    /* console.log(req.statusCode) */
    console.log(req.protocol)
    next()
})

const staticPath = path.join(__dirname, "static")
app.use(express.static(staticPath))
/* app.use(express.static(staticPath, {index:'witcher.jpeg'})) */

//404 middleware; this must be the last middleware, since the next function is not called ==> order of the middleware stack is important
app.use((req, res) => {
    console.log(req.method)
    res.status(404)
    res.send('File not found')
})

app.listen(3000, () => {
    console.log('App starting on port 3000')
})
