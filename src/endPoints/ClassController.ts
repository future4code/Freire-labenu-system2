import { Request, Response } from "express";
import ClassData from "../dataBase/ClassData";
import Class from "../models/Class";

export default class ClassController {

    async createClass(req: Request, res: Response): Promise<void> {
        try {
            const name = req.body.name

            if (!name) {
                throw new Error('O name deve ser passado!')
            }

            const class1 = new Class(name)

            const classData = new ClassData()

            classData.insertClass(class1)

            res.status(201).send('Classe criada com sucesso')
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }


    async getClasses(req: Request, res: Response): Promise<void> {
        try {
            const classData = new ClassData()
            const allClasses = await classData.selectClasses()

            if (!allClasses.length) {
                throw new Error('Não há classes cadastradas!')
            }

            res.status(200).send(allClasses)
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
    async changeClassModule(req: Request, res: Response): Promise<void> {
        try {
            const module = req.body.module
            const id = req.body.id
            if (!module) {
                throw new Error('O parâmetro module deve ser passado!')
            }
            if (module < 0 || module > 6) {
                throw new Error('Módulo não encontrado.')
            }
            const classData = new ClassData()
            classData.changeModule(module, id)
            res.status(200).send({ message: 'Módulo alterado com sucesso!' })

        } catch (error: any) {
            res.status(500).send({ messsage: error.message })
        }
    }
}