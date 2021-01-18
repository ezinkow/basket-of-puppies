module.exports = function (sequelize, DataTypes) {
  const Dog = sequelize.define("Dog", {
    // Giving the Dog model a name of type STRING
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //adding column for medicine information
    meds: {
      type: DataTypes.STRING,
    },

    //adding column for shot records
    shots: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Dog.associate = function(models) {
    // We're saying that a Dog should belong to an Owner
    // A Dog can't be added without an Owner due to the foreign key constraint
    Dog.belongsTo(models.Owner, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Dog;
};
