import Class from "../models/Class";
import { DataBase } from "./DataBase";


export default class ClassData extends DataBase{

    async insertClass(class1: Class): Promise<void> {

        await ClassData.connection()
        .insert({
            id: class1.getId(),
            name: class1.getName(),
            module: class1.getModule()
        })
        .into("class")
    }

    async selectClasses() {
        const result = await ClassData.connection()
        .select("*")
        .from("class")

        return result
    }

}