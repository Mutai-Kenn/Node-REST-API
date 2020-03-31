const router = require("express").Router();
const UserController = require("../controllers/user");

// Register Page
router.get("/signup", (req, res) => res.render("signup", { title: "Signup" }));

// Login Page
router.get("/login", (req, res) => res.render("login", { title: "Login" }));

//Register
router.post("/signup", UserController.signup);

//Login
router.post("/login", UserController.login);

//Delete
router.delete("/:userId", UserController.delete);

module.exports = router;
