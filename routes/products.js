const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request to products page"
  });
});
router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling POST request to products page"
  });
});
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "123") {
    res.status(200).json({
      message: "You include an Id",
      id: id
    });
  } else {
    res.status(200).json({
      message: "You passed an Id"
    });
  }
});
router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "You updated products page"
  });
});
router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "You deleted products"
  });
});

module.exports = router;
