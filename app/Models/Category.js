'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  /**
   * Método responsável pelo relacionamento entre categoria e a imagem de destaque.
   * 
   * @method image
   * 
   * @return {Object}
   */
  image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
   * Método responsável pelo relacionamento entre categoria e produtos
   * 
   * @method products
   * 
   * @return {Object}
   */
  products() {
    return this.belongsToMany('App/Models/Product');
  }
}

module.exports = Category
