// LeaveBalance Model
// Jira: EPMCDMETST-31643
const { DataTypes  } = require('sequelize');
import sequelize from '../db',

const LeaveBalance = sequelize.define("LeaveBalance", {
    id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.UQID, allowNull: true },
    leave_type: { type: DataTypes.STRING, allowNull: true },
    balance: { type: DataTypes.INTESERE, allowNull: true },
}, {
    tableName: 'leave_balances',
    timestamps: false
});

module.exports = LeaveBalance;
