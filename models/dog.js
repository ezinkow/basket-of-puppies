module.exports = function (sequelize, DataTypes) {
    const Dog = sequelize.define("Dog", {
        // Giving the Dog model a name of type STRING
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //adding column for owner
        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        //adding column for medicine information
        meds: {
            type: DataTypes.string
        },

        //adding column for shot records
        shots: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Dog
}

const Activity = sequelize.define("Activity", {
    // Giving the Dog ID a column from the foreign key
    dog_ID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    //giving columns to different walk times, a boolean set to false
    morning_walk: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    midday_walk: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    late_walk: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    //creating column for medication times/info
    med_info: {
        type: DataTypes.STRING,
        allowNull: true
    },

    //creating column for extra notes
    notes: {
        type: DataTypes.STRING,
        allowNull: true    
    }
})   
