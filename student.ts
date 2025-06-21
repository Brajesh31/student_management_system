import inquirer from "inquirer";
class school{
    name:string
    student:student[]=[]
    Teachers:Teacher[]=[]
addstudent(stuobj:student){
   this.student.push(stuobj)
}
addTeacher(teachobj:Teacher){
this.Teachers.push(teachobj)
}
constructor(name:string){
    this.name=name
}
}
class student{
    name:string
    age:number
    schoolname:string
    Gender:string
    constructor(name:string,age:number,schoolname:string,Gender:string){
        this.name=name
        this.age=age
        this.schoolname=schoolname
        this.Gender=Gender
    }
}
class Teacher extends student{}

let school1 = new school("Alpha")
let school2 = new school("Hyphen")
 
let s1= new student("Naveed",19,school2.name,"male")
let s2= new student("Tooba",12,school1.name,"Female")
let s3= new student("saad",16,school2.name,"male")
let s4= new student("Humna",18,school1.name,"Female")


let t1 = new Teacher("Sara",20,school1.name,"Female")
let t2 = new Teacher("Tahreem",24,school1.name,"Female")
let t3 = new Teacher("salman",32,school2.name,"male")
let t4 = new Teacher("ali",40,school1.name,"male")
let t5 = new Teacher("Ayesha",22,school2.name,"Female")


school2.addstudent(s1)
school1.addstudent(s2)
school2.addstudent(s3)
school1.addstudent(s4)
school1.addTeacher(t1)
school1.addTeacher(t2)
school2.addTeacher(t3)
school1.addTeacher(t4)
school2.addTeacher(t5)
console.log(school1)
console.log(school2)