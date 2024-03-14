import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/sequelize";

interface TotoAttributes{
    id?: string;
    name?: string
}

interface TotoInstance extends Model<TotoAttributes>, TotoAttributes{}

const Toto = sequelize.define<TotoInstance>('toto', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
})

export default Toto;
