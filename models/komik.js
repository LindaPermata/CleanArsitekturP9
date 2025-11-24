module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('Komik', {
            id: {
                type: DataTypes.INTEGER,
                autiIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,

            },
            description: {
                type: DataTypes.STRING,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false
            },
            imageType: DataTyoes.STRING,
            imageName: DataTypes.STRING,
            imageData: DataTypes.BLOB('long'),

        },    
        {
        tableName: 'komik',
        }
    );

    return Komik;
};

