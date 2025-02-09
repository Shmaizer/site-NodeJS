const {Router} = require('express')
const router = Router()
const Course = require('../model/course')

router.get('/',(req,res)=>{
    res.render('add',{
        title: "Добавить курс",
        isAdd: true
    })
})
router.post('/',async(req,res)=>{
    const course = new Course(req.body.title,req.body.price,req.body.img)
    await course.save()
    res.redirect('/courses')
})
module.exports=router