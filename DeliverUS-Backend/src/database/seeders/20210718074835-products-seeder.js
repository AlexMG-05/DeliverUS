const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {})
    */

    module.exports.copyFiles()

    await queryInterface.bulkInsert('Products',
      [
        // Casa felix id=1
        // Starters id=1
        { name: 'Ensaladilla', description: 'Tuna salad with mayonnaise', price: 2.5, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 1, availability: true, restaurantId: 1, productCategoryId: 1 },
        { name: 'Olives', description: 'Home made', price: 1.5, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 2, availability: true, restaurantId: 1, productCategoryId: 1 },

        // drinks id=3
        { name: 'Coca-cola', description: '33 cc', price: 1.5, image: process.env.PRODUCTS_FOLDER + '/cola.jpeg', order: 3, availability: true, restaurantId: 1, productCategoryId: 3 },
        { name: 'Water', description: '50 cc', price: 1, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 4, availability: true, restaurantId: 1, productCategoryId: 3 },
        { name: 'Coffee', description: 'expresso', price: 1.2, image: process.env.PRODUCTS_FOLDER + '/cafe.jpeg', order: 5, availability: true, restaurantId: 1, productCategoryId: 3 },

        // main courses id=4
        { name: 'Steak', description: 'Pork', price: 3.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 6, availability: true, restaurantId: 1, productCategoryId: 4 },
        { name: 'Grilled tuna', description: 'with salad', price: 4.5, image: process.env.PRODUCTS_FOLDER + '/grilledTuna.jpeg', order: 7, availability: true, restaurantId: 1, productCategoryId: 4 },
        { name: 'Mexican burritos', description: 'tomato, chicken, cheese', price: 4, image: process.env.PRODUCTS_FOLDER + '/burritos.jpeg', order: 8, availability: true, restaurantId: 1, productCategoryId: 4 },
        // desserts id=5
        { name: 'Chocolate cake', description: '1 piece', price: 3, image: process.env.PRODUCTS_FOLDER + '/chocolateCake.jpeg', order: 11, availability: true, restaurantId: 1, productCategoryId: 5 },
        { name: 'Apple pie', description: '1 piece', price: 3, image: process.env.PRODUCTS_FOLDER + '/applePie.jpeg', order: 10, availability: false, restaurantId: 1, productCategoryId: 5 },
        { name: 'Churros', description: '5 pieces', price: 2, image: process.env.PRODUCTS_FOLDER + '/churros.jpeg', order: 9, availability: false, restaurantId: 1, productCategoryId: 5 },

        // 100 montaditos id=2
        // Starters id=1
        { name: 'Salchichón', description: '12 little pieces', price: 1.5, image: process.env.PRODUCTS_FOLDER + '/salchichon.jpeg', order: 1, availability: true, restaurantId: 2, productCategoryId: 1 },
        { name: 'Olives', description: '1 bowl', price: 1.5, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 2, availability: true, restaurantId: 2, productCategoryId: 1 },

        // drinks id=3
        { name: 'Coca-cola', description: '33 cc', price: 1.5, image: process.env.PRODUCTS_FOLDER + '/cola.jpeg', order: 3, availability: true, restaurantId: 2, productCategoryId: 3 },
        { name: 'Water', description: '50 cc', price: 1, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 4, availability: true, restaurantId: 2, productCategoryId: 3 },
        { name: 'Beer', description: '20 cc', price: 1, image: process.env.PRODUCTS_FOLDER + '/cerveza.jpeg', order: 5, availability: true, restaurantId: 2, productCategoryId: 3 },

        // Sandwiches id=6
        { name: 'Jamón', description: 'Cured Jam and olive oil', price: 1.5, image: process.env.PRODUCTS_FOLDER + '/montaditoJamon.jpeg', order: 6, availability: true, restaurantId: 2, productCategoryId: 6 },
        { name: 'Cheese and tomato', description: 'Iberian cheese and tomato', price: 1, image: process.env.PRODUCTS_FOLDER + '/montaditoQuesoTomate.jpeg', order: 7, availability: true, restaurantId: 2, productCategoryId: 6 },
        { name: 'Smoked salmon', description: 'Norwegian smoked salmon', price: 2, image: process.env.PRODUCTS_FOLDER + '/montaditoSalmon.jpeg', order: 8, availability: true, restaurantId: 2, productCategoryId: 6 },
        // desserts id=5
        { name: 'Chocolate ice-cream', description: '100 ml', price: 3, image: process.env.PRODUCTS_FOLDER + '/chocolateIceCream.jpeg', order: 9, availability: true, restaurantId: 2, productCategoryId: 5 },
        { name: 'Sweet sandwich', description: '1 piece', price: 1.5, image: process.env.PRODUCTS_FOLDER + '/montaditoChocolate.png', order: 10, availability: true, restaurantId: 2, productCategoryId: 5 },
        { name: 'Muffin', description: '1 piece', price: 1, image: process.env.PRODUCTS_FOLDER + '/muffin.jpeg', order: 11, availability: false, restaurantId: 2, productCategoryId: 5 },

        // Tapas & Co (Spanish restaurant) id=3
        // Starters
        { name: 'Patatas Bravas', description: 'Fried potatoes with spicy sauce', price: 4.5, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 1, availability: true, restaurantId: 3, productCategoryId: 1 },
        { name: 'Croquetas', description: 'Ham croquettes', price: 5.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 2, availability: true, restaurantId: 3, productCategoryId: 1 },

        // Drinks
        { name: 'Sangria', description: 'Traditional Spanish wine drink', price: 3.5, image: process.env.PRODUCTS_FOLDER + '/cola.jpeg', order: 3, availability: true, restaurantId: 3, productCategoryId: 3 },
        { name: 'Tinto de Verano', description: 'Red wine with lemonade', price: 2.8, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 4, availability: true, restaurantId: 3, productCategoryId: 3 },

        // Main Courses
        { name: 'Paella', description: 'Traditional Spanish rice dish with seafood', price: 12.0, image: process.env.PRODUCTS_FOLDER + '/paella.jpeg', order: 5, availability: true, restaurantId: 3, productCategoryId: 4 },
        { name: 'Tortilla Española', description: 'Spanish omelette with potatoes', price: 7.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 6, availability: true, restaurantId: 3, productCategoryId: 4 },

        // Desserts
        { name: 'Crema Catalana', description: 'Traditional Spanish custard dessert', price: 4.0, image: process.env.PRODUCTS_FOLDER + '/chocolateCake.jpeg', order: 7, availability: true, restaurantId: 3, productCategoryId: 5 },

        // Napoli Pizzeria (Pizza restaurant) id=4
        // Starters
        { name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', price: 4.0, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 1, availability: true, restaurantId: 4, productCategoryId: 1 },
        { name: 'Garlic Bread', description: 'Bread with garlic butter', price: 3.5, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 2, availability: true, restaurantId: 4, productCategoryId: 1 },

        // Drinks
        { name: 'Italian Soda', description: 'Various flavors', price: 2.5, image: process.env.PRODUCTS_FOLDER + '/cola.jpeg', order: 3, availability: true, restaurantId: 4, productCategoryId: 3 },
        { name: 'Chianti Wine', description: 'Glass of red Italian wine', price: 4.0, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 4, availability: true, restaurantId: 4, productCategoryId: 3 },

        // Main Courses
        { name: 'Margherita Pizza', description: 'Classic tomato, mozzarella and basil', price: 8.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 5, availability: true, restaurantId: 4, productCategoryId: 4 },
        { name: 'Pepperoni Pizza', description: 'Tomato sauce, mozzarella and pepperoni', price: 9.5, image: process.env.PRODUCTS_FOLDER + '/burritos.jpeg', order: 6, availability: true, restaurantId: 4, productCategoryId: 4 },
        { name: 'Quattro Formaggi', description: 'Four cheese pizza', price: 10.0, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 7, availability: true, restaurantId: 4, productCategoryId: 4 },

        // Desserts
        { name: 'Tiramisu', description: 'Classic Italian coffee dessert', price: 5.0, image: process.env.PRODUCTS_FOLDER + '/chocolateCake.jpeg', order: 8, availability: true, restaurantId: 4, productCategoryId: 5 },

        // Pizza Express (Pizza restaurant) id=5
        // Starters
        { name: 'Caprese Salad', description: 'Tomato, mozzarella and basil', price: 6.0, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 1, availability: true, restaurantId: 5, productCategoryId: 1 },

        // Drinks
        { name: 'Craft Beer', description: 'Local IPA', price: 3.5, image: process.env.PRODUCTS_FOLDER + '/cerveza.jpeg', order: 2, availability: true, restaurantId: 5, productCategoryId: 3 },

        // Main Courses
        { name: 'Veggie Supreme', description: 'Vegetarian pizza with bell peppers, onions and mushrooms', price: 11.0, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 3, availability: true, restaurantId: 5, productCategoryId: 4 },
        { name: 'Meat Feast', description: 'Pizza with various meats', price: 12.0, image: process.env.PRODUCTS_FOLDER + '/burritos.jpeg', order: 4, availability: true, restaurantId: 5, productCategoryId: 4 },
        { name: 'Hawaiian', description: 'Ham and pineapple pizza', price: 10.0, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 5, availability: true, restaurantId: 5, productCategoryId: 4 },

        // Gourmet Burger (Burger restaurant) id=6
        // Starters
        { name: 'Onion Rings', description: 'Deep fried onion rings with dipping sauce', price: 4.5, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 1, availability: true, restaurantId: 6, productCategoryId: 1 },
        { name: 'Nachos', description: 'With cheese sauce and guacamole', price: 6.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 2, availability: true, restaurantId: 6, productCategoryId: 1 },

        // Sides
        { name: 'Sweet Potato Fries', description: 'Crispy fried sweet potatoes', price: 3.5, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 3, availability: true, restaurantId: 6, productCategoryId: 2 },

        // Drinks
        { name: 'Milkshake', description: 'Various flavors', price: 4.0, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 4, availability: true, restaurantId: 6, productCategoryId: 3 },

        // Main Courses
        { name: 'Classic Burger', description: 'Beef patty with lettuce, tomato and sauce', price: 9.0, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 5, availability: true, restaurantId: 6, productCategoryId: 4 },
        { name: 'Cheese Burger', description: 'Classic with cheddar cheese', price: 10.0, image: process.env.PRODUCTS_FOLDER + '/burritos.jpeg', order: 6, availability: true, restaurantId: 6, productCategoryId: 4 },
        { name: 'Veggie Burger', description: 'Plant-based patty with fresh vegetables', price: 9.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 7, availability: true, restaurantId: 6, productCategoryId: 4 },

        // Big Bite (Burger restaurant) id=7
        // Sides
        { name: 'French Fries', description: 'Classic crispy fries', price: 3.0, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 1, availability: true, restaurantId: 7, productCategoryId: 2 },
        { name: 'Coleslaw', description: 'Fresh cabbage salad', price: 2.5, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 2, availability: true, restaurantId: 7, productCategoryId: 2 },

        // Drinks
        { name: 'Soft Drink', description: 'Various options', price: 2.0, image: process.env.PRODUCTS_FOLDER + '/cola.jpeg', order: 3, availability: true, restaurantId: 7, productCategoryId: 3 },

        // Main Courses
        { name: 'Double Burger', description: 'Two beef patties with special sauce', price: 12.0, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 4, availability: true, restaurantId: 7, productCategoryId: 4 },
        { name: 'BBQ Bacon Burger', description: 'Beef patty with bacon and BBQ sauce', price: 11.0, image: process.env.PRODUCTS_FOLDER + '/burritos.jpeg', order: 5, availability: true, restaurantId: 7, productCategoryId: 4 },
        { name: 'Chicken Burger', description: 'Fried chicken fillet with mayo', price: 9.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 6, availability: true, restaurantId: 7, productCategoryId: 4 },

        // Green Life (Healthy restaurant) id=8
        // Starters
        { name: 'Hummus', description: 'With vegetable sticks', price: 5.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 1, availability: true, restaurantId: 8, productCategoryId: 1 },

        // Drinks
        { name: 'Green Smoothie', description: 'Spinach, banana and apple', price: 4.5, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 2, availability: true, restaurantId: 8, productCategoryId: 3 },
        { name: 'Fresh Orange Juice', description: 'Freshly squeezed', price: 3.5, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 3, availability: true, restaurantId: 8, productCategoryId: 3 },

        // Main Courses
        { name: 'Buddha Bowl', description: 'Quinoa, avocado, chickpeas and vegetables', price: 10.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 4, availability: true, restaurantId: 8, productCategoryId: 4 },
        { name: 'Veggie Wrap', description: 'Whole grain wrap with fresh vegetables', price: 8.0, image: process.env.PRODUCTS_FOLDER + '/burritos.jpeg', order: 5, availability: true, restaurantId: 8, productCategoryId: 4 },
        { name: 'Protein Salad', description: 'Mixed greens, grilled chicken, eggs and nuts', price: 9.5, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 6, availability: true, restaurantId: 8, productCategoryId: 4 },

        // Fresh & Tasty (Healthy restaurant) id=9
        // Starters
        { name: 'Fruit Salad', description: 'Mixed seasonal fruits', price: 4.5, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 1, availability: true, restaurantId: 9, productCategoryId: 1 },

        // Drinks
        { name: 'Detox Juice', description: 'Celery, apple and ginger', price: 4.0, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 2, availability: true, restaurantId: 9, productCategoryId: 3 },

        // Main Courses
        { name: 'Acai Bowl', description: 'Acai, granola, fruits and honey', price: 9.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 3, availability: true, restaurantId: 9, productCategoryId: 4 },
        { name: 'Avocado Toast', description: 'Whole grain bread with avocado, tomato and seeds', price: 7.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 4, availability: true, restaurantId: 9, productCategoryId: 4 },
        { name: 'Quinoa Salad', description: 'With vegetables and lemon dressing', price: 8.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 5, availability: true, restaurantId: 9, productCategoryId: 4 },

        // Wok & Roll (Asian restaurant) id=10
        // Starters
        { name: 'Spring Rolls', description: 'Vegetable spring rolls', price: 4.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 1, availability: true, restaurantId: 10, productCategoryId: 1 },
        { name: 'Edamame', description: 'Steamed soybeans with salt', price: 3.5, image: process.env.PRODUCTS_FOLDER + '/aceitunas.jpeg', order: 2, availability: true, restaurantId: 10, productCategoryId: 1 },

        // Drinks
        { name: 'Bubble Tea', description: 'Various flavors', price: 4.0, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 3, availability: true, restaurantId: 10, productCategoryId: 3 },

        // Main Courses
        { name: 'Chicken Pad Thai', description: 'Stir-fried rice noodles with chicken', price: 10.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 4, availability: true, restaurantId: 10, productCategoryId: 4 },
        { name: 'Beef Teriyaki', description: 'Beef with teriyaki sauce and rice', price: 11.0, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 5, availability: true, restaurantId: 10, productCategoryId: 4 },
        { name: 'Vegetable Stir Fry', description: 'Mixed vegetables with soy sauce', price: 9.0, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 6, availability: true, restaurantId: 10, productCategoryId: 4 },

        // Sakura Sushi (Asian restaurant) id=11
        // Starters
        { name: 'Miso Soup', description: 'Traditional Japanese soup', price: 3.0, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 1, availability: true, restaurantId: 11, productCategoryId: 1 },
        { name: 'Gyoza', description: 'Japanese dumplings', price: 5.5, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 2, availability: true, restaurantId: 11, productCategoryId: 1 },

        // Drinks
        { name: 'Green Tea', description: 'Traditional Japanese green tea', price: 2.5, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 3, availability: true, restaurantId: 11, productCategoryId: 3 },
        { name: 'Sake', description: 'Rice wine', price: 6.0, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: 4, availability: true, restaurantId: 11, productCategoryId: 3 },

        // Main Courses
        { name: 'California Roll', description: '8 pieces of sushi with crab, avocado and cucumber', price: 9.0, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 5, availability: true, restaurantId: 11, productCategoryId: 4 },
        { name: 'Salmon Nigiri', description: '6 pieces of fresh salmon sushi', price: 10.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 6, availability: true, restaurantId: 11, productCategoryId: 4 },
        { name: 'Bento Box', description: 'Assortment of sushi, tempura and salad', price: 13.5, image: process.env.PRODUCTS_FOLDER + '/ensaladilla.jpeg', order: 7, availability: true, restaurantId: 11, productCategoryId: 4 },
        { name: 'Ramen', description: 'Noodle soup with pork or chicken', price: 9.5, image: process.env.PRODUCTS_FOLDER + '/steak.jpeg', order: 8, availability: true, restaurantId: 11, productCategoryId: 4 }
      ], {})
    const thousandProducts = module.exports.createNProducts(1000, 12)
    await queryInterface.bulkInsert('Products', thousandProducts)

    const thirtyProducts = module.exports.createNProducts(30, 14)
    await queryInterface.bulkInsert('Products', thirtyProducts)

    const fiftyProducts = module.exports.createNProducts(50, 15)
    await queryInterface.bulkInsert('Products', fiftyProducts)

    const hundredProducts = module.exports.createNProducts(100, 16)
    await queryInterface.bulkInsert('Products', hundredProducts)

    const twoHundredProducts = module.exports.createNProducts(200, 17)
    await queryInterface.bulkInsert('Products', twoHundredProducts)

    const oneProduct = module.exports.createNProducts(1, 18)
    await queryInterface.bulkInsert('Products', oneProduct)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {})
     */
    const { sequelize } = queryInterface
    try {
      await sequelize.transaction(async (transaction) => {
        const options = { transaction }
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', options)
        await sequelize.query('TRUNCATE TABLE Products', options)
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options)
      })
    } catch (error) {
      console.error(error)
    }
  },

  copyFiles: () => {
    const originDir = 'public/example_assets/'
    const destinationDir = process.env.PRODUCTS_FOLDER + '/'
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true })
    }
    const productsFilenames = ['aceitunas.jpeg', 'agua.png', 'applePie.jpeg', 'burritos.jpeg', 'cafe.jpeg', 'cerveza.jpeg', 'chocolateCake.jpeg', 'chocolateIceCream.jpeg', 'churros.jpeg', 'cola.jpeg', 'ensaladilla.jpeg', 'femaleAvatar.png', 'grilledTuna.jpeg', 'heroImage.jpg', 'logo.jpeg', 'maleAvatar.png', 'montaditoChocolate.png', 'montaditoJamon.jpeg', 'montaditoQuesoTomate.jpeg', 'montaditoSalmon.jpeg', 'muffin.jpeg', 'paella.jpeg', 'salchichon.jpeg', 'steak.jpeg']
    productsFilenames.forEach(productFilename => {
      fs.copyFile(originDir + productFilename, destinationDir + productFilename, (err) => {
        if (err) throw err
      })
    })
  },
  createNProducts: (numProducts, restaurantId) => {
    const productsArray = []
    for (let i = 0; i < numProducts; i++) {
      productsArray[i] = { name: 'Product #' + i, description: 'Description #' + i, price: i, image: process.env.PRODUCTS_FOLDER + '/agua.png', order: i, availability: true, restaurantId, productCategoryId: 5 }
    }
    return productsArray
  }
}
