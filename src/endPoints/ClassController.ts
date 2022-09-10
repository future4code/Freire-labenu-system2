import { Request, Response } from "express";
import ClassData from "../dataBase/ClassData";
import Class from "../models/Class";

export default class ClassController {
    
    async createClass(req: Request, res: Response){
        try {
            const name = req.body.name

            if(!name) {
                throw new Error('O name deve ser passado!')
            }

            const class1 = new Class(name)
            
            const classData = new ClassData()

            const answer = classData.insertClass(class1)

            res.status(201).send('Classe criada com sucesso')
        } catch (error: any) {
            res.status(500).send({message: error.message})
        }
    }


    async getClasses(req: Request, res: Response){
        try {
            const classData = new ClassData()
            const allClasses = await classData.selectClasses()

            if(!allClasses.length) {
                throw new Error('Não há classes cadastradas!')
            }

            res.status(200).send(allClasses)
        } catch (error: any) {
            res.status(500).send({message: error.message})
        }
    }
    async changeClassModule(req: Request, res: Response){
        try {
            
        } catch (error) {
            
        }
    }
}