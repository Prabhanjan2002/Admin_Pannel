require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDb = require("./utils/db");
const erroeMiddleware = require("./middlewares/error-middleware");

//lets tacle cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credential: true,
};
app.use(cors(corsOptions));

//middleware (parsing jason data from request through postman)
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

// app.get("/", (req, res) => {
//   res.status(200).send("welcome to web");
// });

// app.get("/register", (req, res) => {
//   res.status(200).send("welcome to register page");
// });

app.use(erroeMiddleware);

const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running:${PORT}`);
  });
});
