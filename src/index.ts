import app from "./app";
import { AddressInfo } from "net"
import { StudentController} from "./endPoints/studentController";


const server = app.listen( 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})

const studentController = new StudentController()

app.post("/student",studentController.createStudent)

app.get("/student/:id",studentController.getUseByName)

app.put("/student",studentController.changeClass)