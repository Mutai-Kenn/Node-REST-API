const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true
  },
  quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model("Order", ordersSchema);
