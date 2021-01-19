module.exports = function (sequelize, DataTypes) {
  const Owner = sequelize.define("Owner", {
    // creating string for owner name
    owner_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //creating column for phone number
    owner_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //creating column for alternate pickup person
    alt_pickup_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });
  return Owner;
};
