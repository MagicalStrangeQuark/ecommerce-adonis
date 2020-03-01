'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')
class Image extends Model {
  /**
   * @method computed
   * 
   * @return {Array}
   */
  static get computed() {
    return ['url']
  }

  /**
   * @method getUrl
   * 
   * @param {Object} model 
   */
  getUrl(model) {
    return `${Env.get('APP_URL')}}/images/${model.path}`
  }
}

module.exports = Image
