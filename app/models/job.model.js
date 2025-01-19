'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  job.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(70)
    },
    description: {
        type: DataTypes.TEXT,
        defaultValue: null
    },
    company: {
        type: DataTypes.STRING(70)
    },
    location : {
        type: DataTypes.TEXT,
        defaultValue: null
    },
    type : {
        type: DataTypes.ENUM('Remote','On-Site','Hybrid'),
        defaultValue: 'Remote'
    },
    userId: {
        type: DataTypes.STRING(40)
    },
  }, {
    sequelize,
    modelName: 'job',
    timestamps: false
  });
  return job;
};