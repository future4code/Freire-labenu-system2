import express, { Express } from "express"
import cors from "cors"
import ClassController from "./endPoints/ClassController"


const app: Express = express()

app.use(express.json())
app.use(cors())

const classController = new ClassController()

app.post('/class', classController.createClass)
app.get('/class', classController.getClasses)
app.put('/class', classController.changeClassModule)


export default app