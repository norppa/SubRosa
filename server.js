require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(cors())
app.use(morgan('short'))
app.use(express.json())

app.use('/cocktailindex', require('./modules/CocktailIndexServer/routers/router'))
app.use('/binder', require('./modules/BinderServer/routers/router'))

app.use('/', (req, res) => {
    res.send('SubRosa Server')
})

app.listen(process.env.PORT, () => console.log(`SubRosa listening on port ${process.env.PORT}`))
