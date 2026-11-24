module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("User", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: noTrueLogging,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
}