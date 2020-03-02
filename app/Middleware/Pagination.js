'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Pagination {
  /**
   * Middleware responsible for pagination
   * 
   * @param {Object} ctx
   * 
   * @param {Function} next
   */
  async handle(ctx, next) {
    if (ctx.request.method() === 'GET') {
      const perPage = parseInt(ctx.request.input('perPage'))
      ctx.pagination = {
        page: parseInt(ctx.request.input('page')),
        limit: parseInt(ctx.request.input('limit'))
      }
      if (!!(perPage > 0)) {
        ctx.pagination.limit = perPage
      }
    }
    // call next to advance the request
    await next()
  }
}

module.exports = Pagination
