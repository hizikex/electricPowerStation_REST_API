import Sequelize from "sequelize";

import powerDb from "../powerConfig/powerConfig.js";

const DataTypes = Sequelize;

export const powerModel = powerDb.define('powerSupplyTable', {
    powerStation: {
        type: DataTypes.STRING(400)
    },
    stateLocated: {
        type: DataTypes.STRING(400)
    },
    megaWattGenerated: {
        type: DataTypes.DOUBLE
    },
    numberOfStatesDistributingTo: {
        type: {
            type: DataTypes.INTEGER
        }
    }
}, {
    freezeTableName: true
})