'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
  /**
   * Método responsável pela formatação da data no formato UNIX para TIMESTAMP próprio do banco de dados.
   * 
   * @method dates
   * 
   * @return {Array}
   */
  static get dates() {
    return super.dates.concat(['valid_from', 'valid_until'])
  }

  /**
   * Método responsável pelo relacionamento entre coupon e usuários
   * 
   * @method users
   * 
   * @return {Object}
   */
  users() {
    return this.belongsToMany('App/Models/User')
  }

  /**
   * Método responsável pelo relacionamento entre coupon e produtos
   * 
   * @method products
   * 
   * @return {Object}
   */
  products() {
    return this.belongsToMany('App/Models/Product')
  }

  /**
   * Método responsável pelo relacionamento entre coupon e pedidos
   * 
   * @method orders
   * 
   * @return {Object}
   */
  orders() {
    return this.belongsToMany('App/Models/Order')
  }
}

module.exports = Coupon
