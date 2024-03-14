import totoRouter from "./toto/toto"
import { Express} from "express"

const router = (app: Express) => {
	app.use("/toto", totoRouter)
}

export default router
