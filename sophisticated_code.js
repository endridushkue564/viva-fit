/* sophisticated_code.js */

// This code is a complex and elaborate example of an online shopping application.
// It includes functionalities like user registration, product browsing, shopping cart management, and order placement.

// Global variables
let users = [];
let products = [];
let shoppingCart = [];

// User class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = Date.now();
  }
}

// Product class
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.id = Date.now();
  }
}

// Add users to the system
function registerUser(name, email, password) {
  const newUser = new User(name, email, password);
  users.push(newUser);
  console.log("User registered successfully!");
}

// Add products to the system
function addProduct(name, price, stock) {
  const newProduct = new Product(name, price, stock);
  products.push(newProduct);
  console.log("Product added successfully!");
}

// Display available products
function displayProducts() {
  console.log("Available Products:");
  products.forEach((product) => {
    console.log(`${product.name} - $${product.price}`);
  });
}

// Add a product to the shopping cart
function addToCart(productId, quantity) {
  const product = products.find((product) => product.id === productId);

  if (!product) {
    console.log("Product not found!");
    return;
  }
  
  if (product.stock < quantity) {
    console.log("Insufficient stock!");
    return;
  }
  
  const cartItem = {
    product: product,
    quantity: quantity
  };
  
  shoppingCart.push(cartItem);
  console.log("Product added to cart!");
}

// Remove a product from the shopping cart
function removeFromCart(productId) {
  const index = shoppingCart.findIndex((item) => item.product.id === productId);

  if (index === -1) {
    console.log("Product not found in the cart!");
    return;
  }

  shoppingCart.splice(index, 1);
  console.log("Product removed from cart!");
}

// Place an order
function placeOrder() {
  console.log("Order placed successfully!");
  shoppingCart = [];
}

// Sample usage of the functionalities

// Register users
registerUser("John Doe", "john@example.com", "password123");
registerUser("Jane Smith", "jane@example.com", "password456");

// Add products
addProduct("iPhone 12", 999, 10);
addProduct("Samsung Galaxy S21", 899, 5);
addProduct("Google Pixel 5", 699, 2);

// Display available products
displayProducts();

// Add products to the shopping cart
addToCart(products[0].id, 2);
addToCart(products[1].id, 1);

// Remove a product from the shopping cart
removeFromCart(products[0].id);

// Display the final shopping cart
console.log("Final Shopping Cart:");
shoppingCart.forEach((item) => {
  console.log(`${item.product.name} - Quantity: ${item.quantity}`);
});

// Place an order
placeOrder();