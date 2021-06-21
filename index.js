const express = require('express')

const app = express()
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello from server!')
})

app.get('/api/helloworld', (req, res) => {
    res.json({
        sayHi: 'hello from server, nice to meet you!',
    })
})

app.listen(5000, () => {
    console.log('App listening on port 5000')
})
