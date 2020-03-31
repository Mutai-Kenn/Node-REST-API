const router = require("express").Router();

// Home
router.get("/", (req, res) => res.render("index", { title: "Home" }));

module.exports = router;
