Product API Server
A RESTful API for managing products built with Node.js and Express.

🚀 Quick Start
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation & Running
Clone or download the project files

Install dependencies

bash
npm install express body-parser uuid dotenv
Set up environment variables (optional)

bash
# Create a .env file in the root directory
API_KEY=12345
PORT=3000
Start the server

bash
node server.js
Verify the server is running

text
Server is running on http://localhost:3000
📚 API Documentation
Authentication
All endpoints require an API key in the request header:

text
x-api-key: 12345
Base URL
text
http://localhost:3000
🔌 API Endpoints
1. Get All Products
GET /api/products

Response:

json
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  },
  {
    "id": "2", 
    "name": "Smartphone",
    "description": "Latest model with 128GB storage",
    "price": 800,
    "category": "electronics",
    "inStock": true
  }
]
2. Get Single Product
GET /api/products/:id

Example: GET /api/products/1

Response:

json
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}
Error Response:

json
{
  "message": "Product not found"
}
3. Create New Product
POST /api/products

Headers:

text
Content-Type: application/json
x-api-key: 12345
Request Body:

json
{
  "name": "Tablet",
  "description": "10-inch tablet with stylus",
  "price": 400,
  "category": "electronics",
  "inStock": true
}
Response (201 Created):

json
{
  "id": "4",
  "name": "Tablet",
  "description": "10-inch tablet with stylus", 
  "price": 400,
  "category": "electronics",
  "inStock": true
}
4. Update Product
PUT /api/products/:id

Example: PUT /api/products/1

Request Body:

json
{
  "name": "Gaming Laptop",
  "description": "Updated description",
  "price": 1500,
  "category": "electronics", 
  "inStock": true
}
Response:

json
{
  "id": "1",
  "name": "Gaming Laptop",
  "description": "Updated description",
  "price": 1500,
  "category": "electronics",
  "inStock": true
}
5. Delete Product
DELETE /api/products/:id

Example: DELETE /api/products/3

Response (200):

json
{
  "message": "Product deleted successfully"
}
🛠️ Testing the API
Using curl
Get all products:

bash
curl -H "x-api-key: 12345" http://localhost:3000/api/products
Create a product:

bash
curl -X POST -H "Content-Type: application/json" -H "x-api-key: 12345" \
  -d '{"name":"Headphones","description":"Wireless headphones","price":150,"category":"electronics","inStock":true}' \
  http://localhost:3000/api/products
Update a product:

bash
curl -X PUT -H "Content-Type: application/json" -H "x-api-key: 12345" \
  -d '{"name":"Updated Product","description":"New description","price":200,"category":"electronics","inStock":false}' \
  http://localhost:3000/api/products/1
Delete a product:

bash
curl -X DELETE -H "x-api-key: 12345" http://localhost:3000/api/products/2
Using Postman
Set base URL: http://localhost:3000

Add header: x-api-key: 12345

Test each endpoint with appropriate method and body

📁 Project Structure
text
project/
├── server.js          # Main server file
├── middleware/
│   ├── auth.js        # API key authentication
│   ├── logger.js      # Request logging
│   └── errorHandler.js # Error handling
├── routes/
│   └── products.js    # Product routes
├── .env               # Environment variables
└── README.md          # This file
🔒 Features
API Key Authentication - Secure access to endpoints

Request Logging - Track all incoming requests

Error Handling - Proper error responses

Input Validation - Validate product data

In-Memory Storage - No database required for demo

🐛 Troubleshooting
Common Issues:

Port already in use: Change PORT in .env file

Missing API key: Add x-api-key: 12345 header

Invalid JSON: Ensure request body is valid JSON

Logs:
The server logs all requests in the format:

text
[2024-01-15T10:30:00.000Z] GET /api/products
📄 License
This project is for educational purposes as part of a coding assignment.

