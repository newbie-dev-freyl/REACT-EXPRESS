import { Sequelize, DataTypes } from 'sequelize'
import { DB } from '../config/config.db.js'

export const USERS = DB.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        }
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true,
            notEmpty: true,
            len: [5, 100],
            is: /^\s*[a-zA-Z]+( [a-zA-Z]+)*\s*$/
        }
    }
})