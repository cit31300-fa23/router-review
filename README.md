# Router Review

An application to review using `express-generator` and to demonstrate routing requests.

## Setup
* From your local root directory: `express --ejs --git router-review`
* `cd router-review`
* `code README.md .env start.js`
* Review `.gitignore` file
* Add content to `start.js`
* `npm install -D nodemon`
* `npm audit fix --force`
* Update **scripts** section of `package.json`
```
  "scripts": {
    "start": "node start",
    "dev": "nodemon --watch"
  },
```

## Modifying EJS Templates
* Copy demo images into `public/images`
* Create `views/header.ejs` and `views/footer.ejs` and move in content as needed
* Create `views/about.ejs`, `views/products.ejs`, and `views/product_details.ejs` and include header/footer

## Create New Routers
* Create `routes/about.js` and `routes/products.js` 
* Delete `routes/users.js`
* Edit `app.js` to remove `usersRouter` and add `aboutRouter` and `productsRouter`
* Modify contents of `routes/about.js` (copy from `routes/index.js`)
    * Try to run the app and note the error about **middleware**
* Modify contents of `routes/products.js` (copy from `routes/index.js`)
* Run the application and demonstrate the different routes

## Add "Global" Navigation
* Update `views/header.ejs` to include links to Home, About, and Products

## Add Images to Page (Static Assets)
* Explain `express.static` middleware configuration in `app.js`
* Add single image to `views/products.ejs`

## Add Route to Show Single Product
* Update `routes/products.js` to include some data
* Add an additional route to `routes/products.js` to get the parameter from the URL and render `views/product_details`
* Pass parameter to the view to display the product ID on the view
* View the application in the browser
* Update `routes/products.js` to search the data for the product with the id stored in the parameter
* Pass the entire object to the view
* Update `views/product_details.js` to display the product's name and image