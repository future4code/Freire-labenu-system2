

export default class Class {
    private id: string = Date.now().toString()
    private module: string = '0'
    constructor(private name: string) {}

    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getModule() {
        return this.module
    }
    public setModule(newModule: string) {
        this.module = newModule 
        return newModule
    }
}