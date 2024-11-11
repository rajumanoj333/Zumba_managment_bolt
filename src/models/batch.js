const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Batch = sequelize.define('Batch', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Batch;
};