export interface NewStudent {
    id:string
    name:string
    email:string
    birthDate:Date
    classId:string
}
export interface Hobbies {
  id: string;
  name: string;
}

export class Student  {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private birthDate: Date,
      private classId: string | null,
      private hobbies?: string[]
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.birthDate = birthDate;
      this.classId = classId;
      this.hobbies = hobbies;
    }

    public getStudent(){
      return [
        this.id,
        this.name,
        this.email,
        this.birthDate,
        this.classId,
        this.hobbies
      ]
      } 
    
  
    public getId() {
      return this.id;
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
  
    public getHobbies() {
      return this.hobbies;
    }
  
    public setId(newId: string) {
      this.id = newId;
    }
  
    public setName(newName: string) {
      this.name = newName;
    }
  
    public setEmail(newEmail: string) {
      this.email = newEmail;
    }
  
    public setBirthDate(newBirthDate: Date) {
      this.birthDate = newBirthDate;
    }
  
    public setClassId(newClassId: string | null) {
      this.classId = newClassId;
    }
  
    public setHobbies(newHobbies: string[]) {
      this.hobbies = [...newHobbies];
    }
  }