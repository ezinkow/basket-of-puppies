module.exports = function (sequelize, DataTypes) {
    const Activity = sequelize.define("Activity", {

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
        // med_info: {
        //     type: DataTypes.STRING,

        // },
        // notes: {
        //     type: DataTypes.STRING
        // }
    });

    Activity.associate = function (models) {
        // We're saying that an Activity should belong to an Dog
        // An Activity can't be added without a Dog due to the foreign key constraint
        Activity.belongsTo(models.Dog, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Activity;
};