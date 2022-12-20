import Sequelize from 'sequelize';

const powerDb = new Sequelize('powerSupplyDb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default powerDb;