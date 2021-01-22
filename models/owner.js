module.exports = function (sequelize, DataTypes) {
  const Owner = sequelize.define("Owner", {
    // creating string for owner name
    owner_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    owner_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    //creating column for phone number
    owner_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // len: [10-10]
      }
    },
    
    owner_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },

    //creating column for alternate pickup person
    alt_pickup_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Owner;
};
