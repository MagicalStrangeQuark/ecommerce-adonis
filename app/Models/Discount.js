'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discount extends Model {
  /**
   * @method table
   * 
   * @return {Object}
   */
  static get table() {
    return 'coupon_order'
  }

  /**
   * @method order
   * 
   * @return {Object}
   */
  order() {
    return this.belongsTo('App/Models/Order', 'order_id', 'id')
  }

  /**
   * @method coupon
   * 
   * @return {Object}
   */
  coupon() {
    return this.belongsTo('App/Models/Coupon', 'coupon_id', 'id')
  }
}

module.exports = Discount
