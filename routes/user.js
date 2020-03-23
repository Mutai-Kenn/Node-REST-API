const router = require("express").Router();
const UserController = require("../controllers/user");

router.post("/signup", UserController.signup);

router.post("/login", UserController.login);
router.delete("/:userId", UserController.delete);

module.exports = router;
