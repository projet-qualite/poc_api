import Express from "express"
import TotoController from "../../controllers/toto-controller"

const router = Express.Router()

router.post('/create', Express.json(), TotoController.insert)
router.get('/', TotoController.getAll)
router.put('/update',Express.json(),TotoController.update)
router.delete('/delete',Express.json(), TotoController.delete)

export default router
