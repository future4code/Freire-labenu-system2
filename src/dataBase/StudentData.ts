import { Student } from "../models/Student";
import { DataBase } from "./DataBase";

export class StudentData extends DataBase{
    public static tableStudents = "student"
    
    async createUser(student:Student):Promise<any>{
        try{
        await this.getConnection()
        .insert({
            id:student.getId(),
            name:student.getName(),
            email:student.getEmail(),
            birth_date:student.getBirthDate(),
            class_id:student.getClassId(),
        })
        .into(StudentData.tableStudents)
        return "Estudante criado com sucesso"
    }catch(error){
        return error.sqlMessage || error.message
    }
    }


   async getStudentByName (name:string): Promise<any> {
        try {
            const [result] = await this.getConnection()
            .select("*")
            .from("student")
            .where("name","LIKE",`%${name}%`)
            return result
        } catch (error) {
            return error.sqlMessage || error.message
        }
    }

    async changeClassByid (id:string,classId:string):Promise<any>{
        try {
             await this.getConnection()
            .update("class_id",classId)
            .from("student")
            .where("id","LIKE",`${id}`)
            return "Turma alterada com sucesso"
        } catch (error) {
            return error.sqlMessage || error.message
        }
    }
          
}

