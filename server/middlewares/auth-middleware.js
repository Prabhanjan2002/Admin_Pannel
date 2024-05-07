const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  //at the postman we can see the header is authorization fron that we will get the token

  if (!token) {
    return res
      .status(401)
      .json({ message: "unauthorized HTTP,token not provided" });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  //the token is created and at the front of token there is a string "Bearer " so to remove it we used the above syntax
  console.log(("token from auth middleware", jwtToken));
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY); //veryfy syntax  of jwt
    console.log(isVerified);

    const userData = await User.findOne({ email: isVerified.email });
    //check for the validity of the email from the user which was imported from the user-model.js
    console.log(userData);
    //then assigning the value to the variables
    req.user = userData;
    req.token = token;
    req.userID = userData._Id;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "unauthorized HTTP,token not provided" });
  }
};

module.exports = authMiddleware;
