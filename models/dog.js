module.exports = function (sequelize, DataTypes) {
  const Dog = sequelize.define("Dog", {
    // Giving the Dog model a name of type STRING
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //adding column for owner
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    //adding column for medicine information
    meds: {
      type: DataTypes.string,
    },

    //adding column for shot records
    shots: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Dog;
};
