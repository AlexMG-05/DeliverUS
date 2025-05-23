import { check } from 'express-validator'
import { Product, Order, Restaurant } from '../../models/models.js'

const checkRestaurantExists = async (value, { req }) => {
  try {
    const restaurant = await Restaurant.findByPk(req.body.restaurantId)
    if (!restaurant) {
      return Promise.reject(new Error('The restaurantId does not exist.'))
    }
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}

const checkProductsCreate = async (value, { req }) => {
  try {
    for (const p of value) {
      const product = await Product.findByPk(p.productId)
      if (p.productId < 1) {
        return Promise.reject(new Error('Invalid productId.'))
      }
      if (!product.availability) {
        return Promise.reject(new Error('The product is not available.'))
      }
      if (product.restaurantId !== req.body.restaurantId) {
        return Promise.reject(new Error('The product does not belong to the given restaurant.'))
      }
    }
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}

const checkProductAreAvailable = async (value, { req }) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    const products = value
    for (const p of products) {
      const product = await Product.findByPk(p.productId)
      if (product.availability === false) {
        return Promise.reject(new Error('The product is not available.'))
      }
      if (product.restaurantId !== order.restaurantId) {
        return Promise.reject(new Error('Some products does not belong to the orders restaurant'))
      }
    }
    return Promise.resolve()
  } catch (err) {
    return Promise.reject(new Error(err))
  }
}

// TODO: Include validation rules for create that should:
// 1. Check that restaurantId is present in the body and corresponds to an existing restaurant
// 2. Check that products is a non-empty array composed of objects with productId and quantity greater than 0
// 3. Check that products are available
// 4. Check that all the products belong to the same restaurant
const create = [
  check('address').exists().isString().isLength({ min: 1, max: 255 }).trim(),
  check('restaurantId').exists().isInt({ min: 1 }).toInt(),
  check('restaurantId').custom(checkRestaurantExists),
  check('products').exists().custom(checkProductsCreate).isArray({ min: 1 }),
  check('products.*.quantity').isInt({ min: 1 })
]
// TODO: Include validation rules for update that should:
// 1. Check that restaurantId is NOT present in the body.
// 2. Check that products is a non-empty array composed of objects with productId and quantity greater than 0
// 3. Check that products are available
// 4. Check that all the products belong to the same restaurant of the originally saved order that is being edited.
// 5. Check that the order is in the 'pending' state.
const update = [
  check('restaurantId').not().exists(),
  check('address').exists().isString().isLength({ min: 1, max: 255 }).trim(),
  check('userId').not().exists(),
  check('products').exists().custom(checkProductAreAvailable).isArray(),
  check('products.*.quantity').exists().isInt({ min: 1 }).toInt()
]
export { create, update }
