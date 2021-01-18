module.exports = function (sequelize, DataTypes) {
  const Activity = sequelize.define("Activity", {
    // Giving the Dog ID a column from the foreign key
    dog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    //giving columns to different walk times, a boolean set to false
    morning_walk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    midday_walk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    late_walk: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    //creating column for medication times/info
    med_info: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    //creating column for extra notes
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Activity;
};
