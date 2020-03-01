'use strict'

class AuthController {
  /**
   * @param {Object} request
   * @param {Object} response
   */
  async register({
    request,
    response
  }) {
    return {
      "status": true,
      "message": `Chegamos aqui ${new Date()}`
    }
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Object} auth
   */
  async login({
    request,
    response,
    auth
  }) {
    //
  }

  /**
   * @param {Object} request
   * @param {Object} response
   * @param {Object} auth
   */
  async refresh({
    request,
    response,
    auth
  }) {
    //
  }

  async logout({
    request,
    response,
    auth
  }) {

  }

  async forgoot({
    request,
    response
  }) {

  }

  async remember({
    request,
    response
  }) {

  }

  async reset({
    request,
    response
  }) {}
}

module.exports = AuthController
