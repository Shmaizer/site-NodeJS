const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const homeRouter = require('./routers/home')
const coursesRouter = require('./routers/courses')
const addRouter = require('./routers/add')
const cardRouter = require('./routers/card')

const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})


app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use('/',homeRouter)
app.use('/courses',coursesRouter)
app.use('/add',addRouter)
app.use('/card',cardRouter)








const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})