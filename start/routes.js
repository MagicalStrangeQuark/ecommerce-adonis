'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})

Route.group(() => {
  /**
   * Controlador de Categorias
   */
  Route.resource('categories', 'CategoryController')

  /**
   * Controlador de Produtos
   */
  Route.resource('products', 'ProductController')

  /**
   * 
   */
  Route.resource('coupon', 'CouponController')

  /**
   * 
   */
  Route.resource('images', 'ImageController')

  /**
   * 
   */
  Route.resource('users', 'UserController')

  /**
   * 
   */
  Route.resource('orders', 'OrderController')
}).prefix('v1/admin').namespace('Admin')

/**
 * Realiza o agrupamento das rotas de cliente, agrupadas por v1
 */
Route.group(() => {
  Route.get('products', 'ProductController.index')
  Route.get('products/:id', 'ProductController.show')

  Route.get('orders', 'OrderController.index')
  Route.get('orders/:id', 'OrderController.show')
  Route.post('orders', 'OrderController.store')
  Route.put('orders/:id', 'OrderController.update')
}).prefix("v1").namespace('Client')

/**
 * Realiza o agrupamento das rotas iniciando por v1/auth
 */
Route.group(() => {
  Route.post("/register", "AuthController.register").as('auth.register')
  Route.post('/login', 'AuthController.login').as('auth.login')
  Route.post('/refresh', 'AuthController.refresh').as('auth.refresh')
  Route.post('/logout', 'AuthController.logout').as('auth.logout')

  // restore password routes
  Route.post('reset-password', 'AuthController.forgot').as('auth.forgot')
  Route.get('reset-password', 'AuthController.remember').as('auth.remember')
  Route.put('reset-password', 'AuthController.reset').as('auth.reset')
}).prefix("v1/auth").namespace("Auth")
