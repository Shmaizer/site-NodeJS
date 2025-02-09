const {Router} = require('express')
const router = Router()
const Course = require('../model/course')

router.get('/',async(req,res)=>{
    const courses = await Course.getAll()
    res.render('courses',{
        title: "Курсы",
        isCourses:true,
        courses
    })
})

router.get('/:id/edit',async (req,res)=>{
    if(!req.query.allow){
        return res.redirect('/')
    }
    const course = await Course.getById(req.params.id)
    res.render('course-edit',{
        title:`Редактировать ${course.title}`,
        course
    })
})
router.post('/edit',async (req,res)=>{
    await Course.update(req.body)
    res.redirect('/courses')
})
router.get('/:id',async (req,res)=>{
    const course = await Course.getById(req.params.id)
    res.render('course',{
        title: "Курсы",
        course
    })
})

module.exports=router