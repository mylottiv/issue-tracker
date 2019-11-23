module.exports = (sequelize, DataTypes) => {
    const Code = sequelize.define('Code', {
        content: DataTypes.STRING
    }, {timestamps: false});
    Code.associate = function(models) {
        models.Code.belongsTo(models.File, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Code;
};