const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cool = require('cool-ascii-faces')

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .get('/cool', (req, res) => res.send(cool()))
    .get('/about', (req, res) => res.render('pages/about'))
    .get('/projects', (req, res) => res.render('pages/projects'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
