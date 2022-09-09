import { Student } from "../models/Student";
import { Request, Response } from "express";
import { StudentData } from "../dataBase/StudentData";

export class StudentController {

    async createStudent(req:Request,res:Response){
        let errorStatus = 500
        try{
            const {name,email,birthDate,classId} = req.body
        const id = Date.now().toString()
        if(!name || !email || !birthDate || !classId){
            errorStatus = 422
            throw new Error("Digite os parametros necessarios");  
        }
        //instancia ususario 
        const student = new Student(id,name,email,birthDate,classId)
        //instancia banco de dados
        const studentData = new StudentData()
        const result = await studentData.createUser(student)
        res.status(201).send(result)
        }catch(error){
            res.status(errorStatus).send({message: error.message})
        }

    }
    async getUseByName(req:Request,res:Response){
        let errorStatus = 500
        try{
            const name = req.params.name
            if(!name){
                errorStatus = 422
                throw new Error("Digite um nome para busca");
            }
            const student = new StudentData()
            const studentByName = await student.getStudentByName(name)
            res.status(201).send(studentByName)
        }catch(error){
            res.status(errorStatus).send({message: error.message})
        }
    }
    async changeClass(req:Request,res:Response){
        let errorStatus = 500
        try{
            const id = req.query.id as string
            const classId = req.query.classId as string
            if(!id || !classId){
                errorStatus = 422
                throw new Error("Digite os parametros necessarios");
            }
            const student = new StudentData()
            const studentChange = await student.changeClassByid(id,classId)
            res.status(201).send(studentChange)
        }catch(error){
            res.status(errorStatus).send({message: error.message})
        }
    }

}