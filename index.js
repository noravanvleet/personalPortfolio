const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
const port = process.env.PORT ? process.env.PORT : 3333
const bodyParser = require('body-parser')
const router = require('./router')

app.use(
    express.static(path.join(__dirname, '/public')),
    bodyParser.urlencoded({extended: false}),
    bodyParser.json(),
    express.json(),
    cors()
)

routerBuilder.buildRouter()
    .then(router => {
        app.use('/', router)
        app.listen(port, () => {
            console.log(`Nora's Portfolio website listening at http://localhost:${port}`)
        });
    }).catch((err) => {
    console.error(err)
})