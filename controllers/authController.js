const { db, query } = require("../database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: async (req, res) => {
    const { username, email, password, password_confirmation, phone_number } =
      req.body;

    // CEK KLO SEMUA DATA SUDAH TERISI
    if (
      !email ||
      !username ||
      !password ||
      !password_confirmation ||
      !password
    ) {
      return res.status(400).send({ message: "All field need to be filled" });
    }

    // CEK EMAIL DAN USERNAME PERNAH DIPAKAI ATAU BELUM
    let getEmailQuery = `SELECT * FROM users WHERE email = ${db.escape(email)}`;
  },
};
