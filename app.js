const express = require('express')
const app = express()
const morgan = require('morgan')

//listen for requests
app.listen(3003)

// middleware
app.use(morgan('dev'))

app.get('/', (req, res) => {
    // res.send('<p>home page</p>')
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})