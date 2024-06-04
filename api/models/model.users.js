import { Sequelize, DataTypes } from 'sequelize';
import { DB } from '../config/config.db.js';

export const USERS = DB.define('users', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    validate: {
      notNull: true,
      notEmptye: true,
    },
  },

  companyID: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      len: [2, 43],
    },
  },

  middleName: {
    type: DataTypes.STRING,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      len: [2, 43],
    },
  },

  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
    },
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      isEmail: true,
    },
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true,
      len: [6, 100],
    },
  },

  dateCreated: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },

  dateUpdated: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
  },
});

//companyID,
//firstName,
//middleName,
//lastName,
//role,
//email,
//password,
