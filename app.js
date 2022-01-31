const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

app.use((req, res, next) => {
    console.log("Request url:" + req.url)
    console.log("Request date:" + new Date())
    next()
})

app.use((req, res, next) => {
    const file = req.url
    const dir = path.join(__dirname, 'static')
    fs.readdir(dir, (err, files) => {
        if (err || !files.includes(files.slice(0))) {
            console.log('Error')
            console.log(err)
            /* console.log("Can't scan dir " + err) */
            next()
        } else {
            res.sendFile(dir + file)
        }
        /* next() */
    })
})

app.listen(3000, () => {
    console.log("App starting on port 3000")
})

