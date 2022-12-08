# Funiture Store

This is an e-commerce site built for a local furniture shop to sell and market their products.

## Table of content

- [Project Features](#project-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation--set-up)
- [Backend API](#backend-api)
- [API Routes](#api-routes)
- [Contributions](#contributions)
- [Bugs & Feature Request](#bugs--fixes--feature-request)
- [Author](#author)

## Project Features

- Navigation Bar - navigating through different pages(components)
- Home Page - Hero Section
- Products Page - Displays available furnitures in the shop
- Product page - Displays product details
- Cart Page - Displays items in your cart, their prices and the total amount of these products.
- Login Page - For users to login
- Signup Page - For users to register

## Technologies Used

* React Library - it was used to design, structure and add content to the web pages
* CSS - it was used to styling our the pages
* Ruby on Rails - Backend API
* Vercel - Deploying React Frontend
* Railway - Deploying Backend API

## Installation & Set up

Clone the repository
```

git clone git@github.com:WMCharles/Funiture-Store-.git

```

Install dependecies

```

npm install

```
Run
```

npm start

```
# Backend API

Ruby on Rails, Active Records, and Postgres- Used for Backend API development

## Models

- Users
- Categories
- Products
- Reviews

## API Routes

### GET /products

returns a list of products

```
{
    "id": 6,
    "title": "Casablanca King Bed",
    "description": "Experience the best nights of your life right in your own bedroom.",
    "image_url": "https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/c/a/casablanca_brs_high_res.jpg",
    "price": 109995,
    "category": {
      "name": "Bedroom"
    }
},
{
    "id": 7,
    "title": "Bucket 6 Seater Dining Set",
    "description": "Show your home some love by adding this classy dining set. It accommodates 6 and comes with a large table, offering plenty room for everyone. Its seats are also cushioned, making meal times a comfy affair.",
    "image_url": "https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/b/u/bucket_1_1_4_2.jpg",
    "price": 129995,
    "category": {
      "name": "Dining"
}
```
### GET /products/:id: 

returns a single product

```
{
  "id": 4,
  "title": "June L-Shaped Sofa (Blue)",
  "description": "This stylish corner design will maximise space in a modern home or apartment.  Features an ottoman for storage.",
  "image_url": "https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/d/s/dsc_0436_1.jpg",
  "price": 129995,
  "quantity": 1,
  "category": {
    "name": "Living-Room"
  },
  "reviews": [
    {
      "id": 1,
      "rating": null,
      "comment": "How much do you charge for delivery outside Nairobi?",
      "user": {
        "id": 2,
        "username": "Jaqueline_Ortiz16"
      }
    },
    {
      "id": 3,
      "rating": null,
      "comment": "We charge 30,000",
      "user": {
        "id": 1,
        "username": "admin"
      }
    }
  ]
}
```
Otherwise, it returns 

```
{
  "error": "Product not found"
}
```

### POST /products 

used to create a new product and returns the product if successful else validation errors

```
{
  "title": "Foster 8 Seater Dining Set",
  "description": "Create lifetime memories while dinning with family and friends using this high quality 8 Seater Dining Set.  The set is tied off nicely with a set of 8 high quality wooden dining chairs. It will surely be the center piece of your home.",
  "image_url": "https://elegance.co.ke/pub/media/catalog/product/cache/8d8a0146498f1100582724fca223eeb2/f/o/foster_1.jpg",
  "price": 129995,
  "category_id":1
}
```

PATCH /products/:id: updates a single product
### POST /signup

used to sign up a new user using the following parameters

```
{
  "username":"tester",
  "email":"testuser@example.com",
  "password":"xxxxxxxxx",
  "password_confirmation":"xxxxxxxxx"
}
```

if successful it returns a JSON response 

```
{
  "id": 11,
  "username": "tester"
}
```

else it returns

```
{
  "errors": [
    "Password confirmation doesn't match Password",
    "Username has already been taken",
    "Email has already been taken"
  ]
}
```
### POST /login 

used to login using the following parameters
```
{
  "username":"xxxx",
  "password":"xxxx"
}
```
if the user is not authenticated it returns a response
```
{
  "errors": [
    "Invalid username or password"
  ]
}
```
Other authentication methods include: 

POST /logout used to log out

GET /me used to keep logged in users in session

## Contributions

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Bugs & Fixes / Feature request

In case you find a bug, kindly open an issue [here](https://https://github.com/WMCharles/Funyture-Store/issues/new). Include your query and your expected results.

## Author

+ [Charles Wafula](https://github.com/WMCharles)

## License
This project is under [MIT](LICENSE).

[Go Back to the Top](#funiture-store)