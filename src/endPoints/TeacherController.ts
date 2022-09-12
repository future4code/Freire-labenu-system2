import { TeacherData } from './../dataBase/TeacherData';
import { Teacher } from "../models/Teacher";

import { Request, Response } from "express";
import ClassData from '../dataBase/ClassData';


export class TeacherController {
    async createTeacher(req:Request, res:Response){
        try{
            const { name, email, birthDate, classId} = req.body
            let teacherId: string = Date.now.toString()

            if(!teacherId || !name || !email || !birthDate || !classId){
                throw new Error ("Revise os dados enviados e preencha corretamente. ")
            }

            //instacia um docente
            const teacher = new Teacher(teacherId, name, email, birthDate, classId)

            //instancia o banco de dados
            const teacherData = new TeacherData()

            const result = await teacherData.insertTeacher(teacher)
            res.status(201).send(result)

        }catch(error){
            res.status(400).send({message: error.message})
        }



    }

    async getTeacher(req:Request, res:Response){
        try{
            const teacherData = new TeacherData()

            const allTeachers = await teacherData.selectTeachers()

            if(!allTeachers.length){
                throw new Error ("Não há nenhum docente cadastrado!")
            }
        }catch(error:any){
            res.status(500).send({message: error.message})
        }
    }

    // async changeTeacherClass(req:Request, res:Response){
    //     try{
    //         const id = req.params.teacherId
    //         let {classId} = req.body

    //         const teacherData = new TeacherData()

    //         const teacher = await teacherData.getTeacherById(id)

    //         if(!teacher){
    //             throw new Error("Docente não encontrado")
    //         }

    //         const classData = new ClassData()

    //         const classId = await classData.getClassById(classId)
    //     }catch(error:any){

    //     }
    // }
}

