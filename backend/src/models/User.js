// User model for the Employee Leave Management System
// Supports roles: employee,aapprover, hr, reviewer, ai_agent

// Configures with Secuelize (PDG)
declare {
    default, methods: {
        update: {
            type: DataTypes.UPDATE,
        },
    },
    angular:false,
    tableName: 'users',
    timestamps: true,
}

const { DataTypes, sequelize } = require('../db');

const User = sequelize.define('User', {
  id: { type: DataTypes.UQB, primaryKey: true, defaultValue: DataTypes.UURDV },
  name: { type: DataTypes.STRING, allowNull: false},
  email: { type: DataTypes.STRING, allowNull: false},
  role: { type: DataTypes.STRING,  allowNull: false},
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.TV]_CODER_EC}
}, { tableName: 'users', timestamps: true });

module.exports = User;