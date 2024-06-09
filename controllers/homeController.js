const { client } = require("../db/connectdb.js");
const bcrypt = require("bcrypt");

// const homeController = async (req, res) => {
//   try {
//     const data = await client.query(
//       `select orderid as invoice_num,orderdate as date,orderdetails,orderquantity as quantity,price_per_kg,orderquantity*price_per_kg as price from orders left join product_prices on orders.orderdetails = product_prices.product_name ORDER BY orderid`
//     );
//     res.render("app", {
//       message: "Insertion was successful!",
//       list: data.rows,
//     });
//   } catch (err) {
//     console.log(err.message);
//   }
// };

const apppage = async (req, res) => {
  try {
    const data = await client.query(
      `select orderid as invoice_num,orderdate as date,orderdetails,orderquantity as quantity,price_per_kg,orderquantity*price_per_kg as price from orders left join product_prices on orders.orderdetails = product_prices.product_name ORDER BY orderid`
    );
    res.render("app", {
      message: "Insertion was successful!",
      list: data.rows,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const insertdata = async (req, res) => {
  const { productName, productQuantity, customerNumber } = req.body;
  if (!productName || !productQuantity || !customerNumber) {
    res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const { rows } = await client.query(
      `INSERT INTO orders (orderdetails, orderquantity, customer_no) VALUES ($1, $2, $3)`,
      [productName, productQuantity, customerNumber]
    );
    res.status(200).redirect("/home");
  } catch (err) {
    console.log(err.message);
  }
};

const deletedata = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await client.query(
      "DELETE from orders where orderid = $1",
      [id]
    );
    res.status(200).redirect("/home");
  } catch (err) {
    console.log(err.message);
  }
};

const signup = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Please fill all the fields" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { name } = await client.query(
      `SELECT username as name FROM users WHERE username = $1`,
      [username]
    );
    console.log(name);
    if (name) {
      res.status(400).json({ message: "User already exists" });
    }
    const { rows } = await client.query(
      `INSERT INTO users (username, password) VALUES ($1, $2)`,
      [username, hashedPassword]
    );
    res.status(200).redirect("/");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Please fill all the fields" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await client.query(`SELECT * FROM users WHERE username = $1`, [
    username,
  ]);
  if (!user) {
    res.status(400).json({ message: "User does not exist" });
  }
  const match = await bcrypt.compare(password, user.rows[0].password);
  if (!match) {
    res.status(400).json({ message: "Incorrect password" });
  } else {
    res.status(200).redirect("/home");
  }
};

const olduser = (req, res) => {
  res.render("login");
};
const newuser = (req, res) => {
  res.render("signup");
};

const print = async (req, res) => {
  const { phone } = req.body;
  try {
    const data = await client.query(
      `select orderid as invoice_num,orderdetails,orderquantity as quantity,orderquantity*price_per_kg as price from orders left join product_prices on orders.orderdetails = product_prices.product_name where customer_no = $1 ORDER BY orderid `,
      [phone]
    );
    console.log(data.rows);
    res.render("print", {
      message: "Insertion was successful!",
      list: data.rows,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  insertdata,
  deletedata,
  login,
  apppage,
  signup,
  newuser,
  olduser,
  print,
};
