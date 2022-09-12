export class Teacher{
   private teacherId: string;
   private name: string;
   private email:string;
   private birthDate:string;
   private classId:string

   constructor(teacherId: string, name: string, email:string, birthDate:string,
    classId:string){
        this.teacherId = teacherId;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate 
    }

    public getTeacherId(){
        return this.teacherId
    }

    public getName() {
        return this.name;
    }
    
    public getEmail() {
        return this.email;
      }
    
    public getBirthDate() {
        return this.birthDate;
    }
    
    public getClassId() {
        return this.classId;
    }

    public getTeacher(){
        return [
          this.teacherId,
          this.name,
          this.email,
          this.birthDate,
          this.classId,
        ]
    }   //especialidades
 
}