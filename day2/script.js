const products = [
  { 
    name: "Laptop",
    description: "High-performance laptop for programming",
    price: "₹90,000",
  },
  {
    name: "Smartphone",
    description: "Latest Android smartphone with amazing camera and back cover",
    price: "₹29,999",
  },
  {
    name: "Headphones",
    description: "Wireless headphones with noise cancellation. ",
    price: "₹2,000",
  },
  {
    name: "Smart Watch",
    description: "Track your health and notifications wih calling system.",
    price: "₹6,000",
  },

  {
    name: "Panasonic ac",
    description: "Best Performence AC With New Technology",
    price: "₹35,000",
  },
];

const cardContainer = document.getElementById("cardContainer");

const name='satyawan'
cardContainer.innerHTML =  
products.map(
    (product) => 
      `
        <div class="card">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        </div>
    `
  );