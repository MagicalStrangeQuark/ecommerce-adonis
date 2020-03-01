'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  /**
   * @method items
   * 
   * @return {Object}
   */
  items() {
    return this.hasMany('App/Models/OrderItem')
  }

  /**
   * @method coupon
   * 
   * @return {Object}
   */
  cupons() {
    return this.belongsToMany('App/Models/Coupon')
  }

  /**
   * @method discounts
   * 
   * @return {Object}
   */
  discounts() {
    return this.hasMany('App/Models/Discount')
  }

  /**
   * @method user
   * 
   * @return {Object}
   */
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Order
