import { ModelStatic } from "sequelize";
import Service from "./service";

        
class TotoService extends Service {
        
    constructor(model: ModelStatic<any>) {
        super(model)
    }
}

export default TotoService
