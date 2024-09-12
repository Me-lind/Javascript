// Fetch the product data from the json-server
fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        // Select the container where the products will be displayed
        const productList = document.getElementById('product-list');

        // Loop through the products and create HTML elements for each one
        products.forEach(product => {
            // Create a div for each product
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            // Add the product details to the div
            productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Stock:</strong> ${product.stock} items available</p>
    `;

            // Append the product div to the product list container
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
