'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  /**
   * Método responsável pelo relacionamento entre produto e imagem
   * 
   * @method image
   * 
   * @return {Object}
   */
  image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
   * Método responsável pelo relacionamento entre produto e (imagens) galeria de imagens 
   * 
   * @method images
   * 
   * @return {Object}
   */
  images() {
    return this.belongsToMany('App/Models/Image')
  }

  /**
   * Método responsável pelo relacionamento entre produto e categorias
   * 
   * @method categories
   * 
   * @return {Object}
   */
  categories() {
    return this.belongsToMany('App/Models/Category')
  }

  /**
   * Método responsável pelo relacionamento entre produto e coupons de desconto
   * 
   * @method coupons
   * 
   * @return {Object}
   */
  coupons() {
    return this.belongsToMany('App/Models/Coupon')
  }
}

module.exports = Product
