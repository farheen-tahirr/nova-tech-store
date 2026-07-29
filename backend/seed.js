require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");

    // Delete old products
    await Product.deleteMany({});

    // Insert products
    await Product.insertMany([
      {
        name: "Apple iPhone 16 Pro",
        description:
          "The iPhone 16 Pro features the powerful A18 Pro chip, advanced AI capabilities, an improved triple-camera system, and a stunning Super Retina XDR display.",
        price: 439999,
        image: "/images/iphone16pro.png",
        category: "Smartphones",
        stock: 15,
        rating: 5,
        featured: true,
        comingSoon: false
      },

      {
        name: "Samsung Galaxy S25 Ultra",
        description:
          "Flagship Samsung smartphone with AI features and Snapdragon processor.",
        price: 419999,
        image: "/images/s25ultra.png",
        category: "Smartphones",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "Google Pixel 10",
        description:
          "Google flagship phone with AI-powered photography.",
        price: 289999,
        image: "/images/pixel10.png",
        category: "Smartphones",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "MacBook Air M4",
        description:
          "Apple M4 chip, 16GB Unified Memory, 512GB SSD, 13.6-inch Liquid Retina Display.",
        price: 289999,
        image: "/images/macbookairm4.png",
        category: "Laptops",
        stock: 10,
        rating: 5,
        featured: true,
        comingSoon: false
      },

      {
        name: "Dell XPS 15",
        description:
          "Premium Windows laptop for professionals.",
        price: 499999,
        image: "/images/dellxps15.png",
        category: "Laptops",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "ASUS Zenbook 14",
        description:
          "Slim ultrabook with OLED display.",
        price: 319999,
        image: "/images/zenbook14.png",
        category: "Laptops",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "AirPods Max",
        description:
          "Active Noise Cancellation, Spatial Audio, USB-C charging.",
        price: 189999,
        image: "/images/airpodsmax.png",
        category: "Headphones",
        stock: 20,
        rating: 4,
        featured: true,
        comingSoon: false
      },

      {
        name: "Sony WH-1000XM5",
        description:
          "Industry-leading wireless noise cancelling headphones.",
        price: 119999,
        image: "/images/sonyxm5.png",
        category: "Headphones",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "JBL Live 770NC",
        description:
          "Wireless ANC headphones from JBL.",
        price: 54999,
        image: "/images/jbl770nc.png",
        category: "Headphones",
        stock: 0,
        rating: 4,
        featured: false,
        comingSoon: true
      },

      {
        name: "PlayStation 5 Slim",
        description:
          "Sony PS5 Slim Console.",
        price: 189999,
        image: "/images/ps5slim.png",
        category: "Gaming",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "Xbox Series X",
        description:
          "Microsoft Xbox Series X Console.",
        price: 214999,
        image: "/images/xboxseriesx.png",
        category: "Gaming",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "ASUS ROG Ally",
        description:
          "Portable Windows gaming console.",
        price: 209999,
        image: "/images/rogally.png",
        category: "Gaming",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "Keychron K8 Keyboard",
        description:
          "Wireless Mechanical Keyboard.",
        price: 29999,
        image: "/images/keychronk8.png",
        category: "Accessories",
        stock: 25,
        rating: 5,
        featured: false,
        comingSoon: false
      },

      {
        name: "Logitech MX Master 3S",
        description:
          "Advanced wireless productivity mouse.",
        price: 39999,
        image: "/images/mxmaster3s.png",
        category: "Accessories",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "Logitech Brio 4K Webcam",
        description:
          "Professional 4K webcam.",
        price: 49999,
        image: "/images/brio4k.png",
        category: "Accessories",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "Apple Watch Series 10",
        description:
          "Always-On Retina OLED, GPS, Heart Rate Monitoring.",
        price: 154999,
        image: "/images/applewatch10.png",
        category: "Smart Watches",
        stock: 12,
        rating: 5,
        featured: true,
        comingSoon: false
      },

      {
        name: "Samsung Galaxy Watch Ultra",
        description:
          "Premium Samsung smartwatch.",
        price: 189999,
        image: "/images/galaxywatchultra.png",
        category: "Smart Watches",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      },

      {
        name: "Garmin Venu 3",
        description:
          "Advanced fitness smartwatch.",
        price: 139999,
        image: "/images/garminvenu3.png",
        category: "Smart Watches",
        stock: 0,
        rating: 5,
        featured: false,
        comingSoon: true
      }
    ]);

    console.log("🎉 NOVA products inserted successfully!");

    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });