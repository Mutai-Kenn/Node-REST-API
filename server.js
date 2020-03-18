const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Import Routes
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

// Routes Middleware
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
