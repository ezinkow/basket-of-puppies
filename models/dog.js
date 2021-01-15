module.exports = function (sequelize, DataTypes) {
    const Dog = sequelize.define("Dog", {
        // Giving the Dog model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Dog
}
