const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

// Import Routes
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

app.use(morgan("dev"));

// Routes Middleware
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// Handling errors that passes thru' the routes
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Handling all the errors
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
