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
    const filePath = path.join(__dirname, "static", req.url)
    fs.stat(filePath, function(err, fileInfo) {
        if(err) {
            next() //we must call next since node is aynchronous; you need to tell express when to continue
            return;
        }
        if(fileInfo.isFile()) {
            res.sendFile(filePath)
        } else {
            next()
        }
    })
})

//404 middleware
app.use((req, res, next) => {
    res.send("<p>Error: something went wrong<p>")
})

app.listen(3000, () => {
    console.log("App starting on port 3000")
})

