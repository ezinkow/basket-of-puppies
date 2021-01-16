module.exports = function (sequelize, DataTypes) {
    const Dog = sequelize.define("Dog", {
        // Giving the Dog model a name of type STRING
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //adding column for owner
        owner_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        //adding boolean columns for walk times
        morning_walk: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        noon_walk: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        late_walk: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        //adding column for medication

        medication: {
            type: DataTypes.STRING,
            allowNull: false
        },

        //adding column for extra notes
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return Dog
}
