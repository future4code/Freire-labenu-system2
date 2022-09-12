import {Teacher} from "./../models/Teacher"
import { DataBase } from "./DataBase"

export class TeacherData extends DataBase{

    async insertTeacher(teacher: Teacher): Promise<void>{
        await this.getConnection()
        .insert({
            teacherId: teacher.getTeacherId,
            name: teacher.getName,
            email: teacher.getEmail,
            birthDate: teacher.getBirthDate,
            classId: teacher.getClassId
        })
        .into("teacher")

      //  return "Docente criado com sucesso"
    }

     async selectTeachers(){
        const result = await this.getConnection().select("*").from("teacher")

         return result
    }
}