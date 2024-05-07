const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to web24 by controller");
  } catch (error) {
    //console.log(error);
    res.status(400).send({ msg: "page not found" });
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body);
    //res.status(200).send(req.body);

    //for the register page
    //step-1 (get all the data)
    const { username, email, phone, password } = req.body;

    //step-2(check the email exist or not)
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    //if(not exist)
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).send({
      msg: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    //console.log(error);
    res.status(400).send({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    //const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);
    if (user) {
      res.status(200).send({
        msg: "login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json({ message: "internal server error" });
    next(error);
  }
};

//user logic
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user router ${error}`);
  }
};

module.exports = { home, register, login, user };
