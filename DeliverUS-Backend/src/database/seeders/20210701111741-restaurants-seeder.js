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

    await queryInterface.bulkInsert('Restaurants',
      [
        { name: 'Casa Félix', description: 'Cocina Tradicional', address: 'Av. Reina Mercedes 51, Sevilla', postalCode: '41012', url: 'https://goo.gl/maps/GZEfzge4zXz6ySLR8', restaurantCategoryId: 1, shippingCosts: 2.5, email: 'casafelix@restaurant.com', logo: process.env.RESTAURANTS_FOLDER + '/casaFelixLogo.jpeg', phone: 954123123, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'closed' },
        { name: '100 montaditos', description: 'A fun and varied way to enjoy food. A place to share experiences and get carried away by the moment.', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', logo: 'public/restaurants/100MontaditosLogo.jpeg', heroImage: 'public/restaurants/100MontaditosHero.jpeg', url: 'http://spain.100montaditos.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        // New Spanish restaurant
        { name: 'Tapas & Co', description: 'Authentic Spanish tapas in the heart of the city', address: 'Calle Sierpes 23, Sevilla', postalCode: '41004', url: 'https://tapasandco.com', restaurantCategoryId: 1, shippingCosts: 2.0, email: 'info@tapasandco.com', logo: 'public/restaurants/TapasCo.png', phone: 954222333, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'offline' },
        // Pizza restaurants                                                                                                                                                                                                                                                                                                                            
        { name: 'Napoli Pizzeria', description: 'Authentic Neapolitan pizza made in a wood-fired oven', address: 'Plaza del Duque 12, Sevilla', postalCode: '41002', url: 'https://napolipizzeria.com', restaurantCategoryId: 2, shippingCosts: 1.8, email: 'info@napolipizzeria.com', logo: 'public/restaurants/Napoli.jpg', phone: 954333444, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        { name: 'Pizza Express', description: 'Fast and delicious pizza delivery service', address: 'Av. República Argentina 35, Sevilla', postalCode: '41011', url: 'https://pizzaexpress.com', restaurantCategoryId: 2, shippingCosts: 1.5, email: 'info@pizzaexpress.com', logo: 'public/restaurants/PizzaExpress.png', phone: 954444555, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'offline' },
        // Burger restaurants
        { name: 'Gourmet Burger', description: 'Premium handcrafted burgers with local ingredients', address: 'Calle Betis 8, Sevilla', postalCode: '41010', url: 'https://gourmetburger.com', restaurantCategoryId: 3, shippingCosts: 2.2, email: 'info@gourmetburger.com', logo:'public/restaurants/GourmetBurger.jpg', phone: 954555666, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        { name: 'Big Bite', description: 'American-style burgers and fries', address: 'Av. de la Constitución 15, Sevilla', postalCode: '41004', url: 'https://bigbite.com', restaurantCategoryId: 3, shippingCosts: 1.7, email: 'info@bigbite.com', logo: 'public/restaurants/BigBite.jpg', phone: 954666777, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        // Healthy restaurants
        { name: 'Green Life', description: 'Organic and nutritious meals for a balanced lifestyle', address: 'Calle San Pablo 3, Sevilla', postalCode: '41001', url: 'https://greenlife.com', restaurantCategoryId: 4, shippingCosts: 2.0, email: 'info@greenlife.com', logo: 'public/restaurants/GreenLife.png', phone: 954777888, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'temporarily closed' },
        { name: 'Fresh & Tasty', description: 'Healthy bowls, salads and smoothies', address: 'Av. Ramón y Cajal 5, Sevilla', postalCode: '41005', url: 'https://freshandtasty.com', restaurantCategoryId: 4, shippingCosts: 1.8, email: 'info@freshandtasty.com', logo: 'public/restaurants/Fresh&Tasty.png', phone: 954888999, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        // Asian restaurants
        { name: 'Wok & Roll', description: 'Fast Asian cuisine with a modern twist', address: 'Calle Imagen 10, Sevilla', postalCode: '41003', url: 'https://wokandroll.com', restaurantCategoryId: 5, shippingCosts: 1.9, email: 'info@wokandroll.com', logo: 'public/restaurants/Wok&Roll.jpg', phone: 954999000, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        { name: 'Sakura Sushi', description: 'Traditional Japanese sushi and specialties', address: 'Calle Feria 25, Sevilla', postalCode: '41003', url: 'https://sakurasushi.com', restaurantCategoryId: 5, shippingCosts: 2.3, email: 'info@sakurasushi.com', logo: 'public/restaurants/Sakura.png', phone: 954000111, createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        // Others
        { name: '1000 products', description: '1000 products', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', url: 'http://1000products.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        { name: '0 products', description: '0 products', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', url: 'http://1000products.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'closed' },
        { name: '30 products', description: '1000 products', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', url: 'http://1000products.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        { name: '50 products', description: '1000 products', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', url: 'http://1000products.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'offline' },
        { name: '100 products', description: '1000 products', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', url: 'http://1000products.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'closed' },
        { name: '200 products', description: '1000 products', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', url: 'http://1000products.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'online' },
        { name: '1 product', description: '1 product', address: 'Józefa 34, Kraków, Poland', postalCode: '123-4567', url: 'http://1000products.com/', restaurantCategoryId: 6, shippingCosts: 1.5, email: 'info@restaurant.com', phone: '+48123456789', createdAt: new Date(), updatedAt: new Date(), userId: 2, status: 'temporarily closed' }
      ], {})
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
        await sequelize.query('TRUNCATE TABLE Restaurants', options)
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options)
      })
    } catch (error) {
      console.error(error)
    }
  },
  copyFiles: () => {
    const originDir = 'public/example_assets/'
    const destinationDir = process.env.RESTAURANTS_FOLDER + '/'
    console.error(destinationDir)
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true })
    }
    const restaurantsFilenames = ['casaFelixLogo.jpeg', 'casaFelixHero.jpeg', '100MontaditosHero.jpeg', '100MontaditosLogo.jpeg']
    restaurantsFilenames.forEach(resturantFilename => {
      fs.copyFile(originDir + resturantFilename, destinationDir + resturantFilename, (err) => {
        if (err) throw err
      })
    })
  }
}
