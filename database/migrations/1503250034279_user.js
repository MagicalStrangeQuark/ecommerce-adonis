'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table.string('username', 128).notNullable().unique()
      table.string('email', 256).notNullable().unique()
      table.string('password', 64).notNullable()
      table.integer('image_id').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
