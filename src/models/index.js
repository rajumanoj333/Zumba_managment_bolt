const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite')
});

const Participant = require('./participant')(sequelize);
const Batch = require('./batch')(sequelize);

// Associations
Batch.hasMany(Participant);
Participant.belongsTo(Batch);

module.exports = {
  sequelize,
  Participant,
  Batch
};