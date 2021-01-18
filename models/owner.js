module.exports = function (sequelize, DataTypes) {
  const Owner = sequelize.define("Owner", {
    // creating string for owner name
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //creating column for phone number
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //creating column for alternate pickup person
    alt_pickup_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Owner;
};
