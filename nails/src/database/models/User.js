module.exports = (sequelize, DataTypes) => {

    let alias = "Users";

    let cols = {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        nombre: {
            type: DataTypes.STRING(9),
            allowNull: false
        },

        apellido: {
            type: DataTypes.STRING(55),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(55),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(60),
            allowNull: false
        },

        terminos: {
            type: DataTypes.STRING(2),
            allowNull: false
        },

        rol: {
            type: DataTypes.STRING(13),
            allowNull: false
        },

        imagen: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    };

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}