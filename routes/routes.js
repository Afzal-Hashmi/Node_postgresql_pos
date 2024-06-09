const router = require("express").Router();
const {
  // homeController,
  insertdata,
  deletedata,
  login,
  apppage,
  signup,
  newuser,
  olduser,
  print,
} = require("../controllers/homeController");

// router.get("/", login);

router.get("/", olduser);

router.get("/home", apppage);

router.post("/insertData", insertdata);

router.get("/delete/:id", deletedata);

router.post("/login", login);

router.post("/signup", signup);

router.get("/new", newuser);

router.post("/print", print);

module.exports = router;
