const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("DetalleVenta", {
    id_detalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    timestamps: false
  });
};