module.exports = (sequelize, DataTypes) => {
    const File = sequelize.define('File', 
        {
            test: DataTypes.STRING,
            line: {
                type: DataTypes.VIRTUAL
                // get() {
                //     return 
                // }
            }
        },
        {
            timestamps: false
        }
    );
    File.associate = function(models) {
        models.File.hasOne(models.Code);
    };
    File.afterFind(function(result) {
        result.forEach((file) => {
            file.line = file.Code.content
        });
        return result;
    });
    return File;
};