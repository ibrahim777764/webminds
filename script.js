// Sample product data (replace it with your own)
const products = [
    {
      image: "Hotpot.png",
      name: "Template 1",
      price: "$10",
      languages: "HTML, CSS",
    },
    {
      image: "template2.jpg",
      name: "Template 2",
      price: "$15",
      languages: "HTML, CSS, JavaScript",
    },
    // Add more products as needed
  ];
  
  // Render products on the page
  function renderProducts() {
    const productContainer = document.getElementById("product-list");
  
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
  
      const imageElement = document.createElement("img");
      imageElement.src = product.image;
      productElement.appendChild(imageElement);
  
      const nameElement = document.createElement("h2");
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);
  
      const priceElement = document.createElement("p");
      priceElement.textContent = "Price: " + product.price;
      productElement.appendChild(priceElement);
  
      const languagesElement = document.createElement("p");
      languagesElement.textContent = "Languages: " + product.languages;
      productElement.appendChild(languagesElement);
  
      const buyButton = document.createElement("button");
      buyButton.textContent = "Buy Now";
      productElement.appendChild(buyButton);
  
      productContainer.appendChild(productElement);
  
      // Add event listener to handle buy button click
      buyButton.addEventListener("click", () => {
        addToCart(product);
      });
    });
  }
  
  // Function to handle adding product to the cart
  function addToCart(product) {
    // Retrieve existing cart from local storage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Add the selected product to the cart
    existingCart.push(product);
  
    // Store the updated cart in local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));
  
    // Redirect to the cart page
    window.location.href = "cart.html";
  }
  
  // Call the renderProducts function to display the products
  renderProducts();
  