const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const path = require('path')
class Course{
    constructor(title,price,img){
        this.id = uuidv4()
        this.title = title
        this.price = price
        this.img = img
    }

    toJSON(){
        return ({
            title: this.title,
            price: this.price,
            img: this.img,
            id: this.id
        })
    }
    async save(){
        const courses = await Course.getAll()
        console.log(courses)
        return new Promise((resolve, reject)=>{
            fs.writeFile(
                path.join(__dirname,'..','data','courses.json'),
                JSON.stringify(courses),
                (err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                }
            )
        })
    }
    static getAll(){
        
        return new Promise((resolve,reject)=>{
            fs.readFile(
                path.join(__dirname,'..','data','courses.json'),
                'utf-8',
                (err,content)=>{
                    if(err){
                        reject(err)
                    }  
                    else{
                        resolve(content ? JSON.parse(content) : []);
                    }
                }
    
            )
        })
        
    }
    static async getById(id){
        const courses = await Course.getAll()
        return courses.find(c=>c.id ===id)
    }
    static async update(course){
        const courses = await Course.getAll()
        const idx = courses.findIndex(c=>c.id===course.id)
        courses[idx] = course
        return new Promise((resolve, reject)=>{
            fs.writeFile(
                path.join(__dirname,'..','data','courses.json'),
                JSON.stringify(courses),
                (err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    }
                }
            )
        })
    }
}

module.exports = Course