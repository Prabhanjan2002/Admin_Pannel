const express = require("express");
const router = express.Router(); //we need only router functionality
//after creating controllers
//const { home, register } = require("../controllers/auth-controller");
// to make the above line simplier
const authcontrollers = require("../controllers/auth-controller");

const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

// router.get("/", (req, res) => {
//   res.status(200).send("welcome to web using router");
// });

//alternate router syntax below
// router.route("/").get((req, res) => {
//   res.status(200).send("welcome to web using router");
// });

// router.route("/register").get((req, res) => {
//   res.status(200).send("welcome to register page using router");
// });

//the above syntax of request and response are without controllers
//now after we create the controllers the syntax was
// router.route("/").get(home);
// router.route("/register").get(register);

//after the authcontroller creation
router.route("/").get(authcontrollers.home);
// router.route("/register").get(authcontrollers.register); //in get method we only read data
router
  .route("/register")
  .post(validate(signupSchema), authcontrollers.register); //in post method we can insert data
router.route("/login").post(authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
