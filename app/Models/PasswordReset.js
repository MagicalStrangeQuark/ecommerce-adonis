'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async model => {
      model.token = await str_random(25)
      const expires_at = new Date()
      expires_at.setMinutes(expires_at.getMinutes() + 30)
      model.expires_at = expires_at
    })
  }

  /**
   * Método responsável pela formatação da data no formato UNIX para TIMESTAMP próprio do banco de dados.
   * 
   * @method dates
   * 
   * @return {Array}
   */
  static get dates() {
    return super.dates.concat(['expires_at'])
  }

}

module.exports = PasswordReset
