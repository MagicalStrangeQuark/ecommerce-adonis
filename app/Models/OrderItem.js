'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {
  /**
   * Método responsável pelo relacionamento entre o item do pedido e o produto em si.
   * 
   * @method product
   * 
   * @return {Object}
   */
  product() {
    return this.belongsTo('App/Models/Product')
  }

  /**
   * Método responsável pelo relacionamento entre o item do pedido e o pedido em si.
   * 
   * @method order
   * 
   * @return {Object}
   */
  order() {
    return this.belongsTo('App/Models/Order')
  }
}

module.exports = OrderItem
