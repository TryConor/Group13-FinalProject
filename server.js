const express = require('express')
const app = express()
const port = 3001

app.use(express.static('public'))
app.use('/CSS', express.static(__dirname + 'public/CSS')) //set up links in public folder, this one is not working but img is
app.use('/IMG', express.static(__dirname + 'public/IMG'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => (

    res.render('index.ejs')
))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))