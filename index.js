const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const homeRouter = require('./routers/home')
const coursesRouter = require('./routers/courses')
const addRouter = require('./routers/add')

const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})


app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static('css'))
app.use('/',homeRouter)
app.use('/courses',coursesRouter)
app.use('/add',addRouter)








const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})