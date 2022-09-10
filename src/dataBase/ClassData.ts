import Class from "../models/Class";
import { DataBase } from "./DataBase";


export default class ClassData extends DataBase {

    async insertClass(class1: Class): Promise<void> {

        await ClassData.connection()
            .insert({
                id: class1.getId(),
                name: class1.getName(),
                module: class1.getModule()
            })
            .into("class")
    }

    async selectClasses(): Promise<string[]> {
        const result = await ClassData.connection('class')
            .select("*")

        let classInformation: string[] = []
        for (let class1 of result) {
            let students = await ClassData.connection('student')
                .select("id")
                .where({ class_id: class1.id })
            let teachers = await ClassData.connection('teacher')
                .select("id")
                .where({ class_id: class1.id })
            classInformation.push({ ...class1, students, teachers })
        }

        return classInformation
    }

    async changeModule(newModule: string, id: string): Promise<void> {
        await ClassData.connection('class')
            .update({ module: newModule })
            .where({ id: id })
    }

}