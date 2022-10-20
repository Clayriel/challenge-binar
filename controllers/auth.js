const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  create: async (req, res) => {
    try {
      const { email, username, password } = req.body;
      const emailExist = await User.findOne({ where: { email } });
      if (emailExist) {
        return res.status(400).json({
          status: false,
          message: "Email Already Used",
          data: null,
        });
      }
      const usernameExist = await User.findOne({ where: { username } });
      if (usernameExist) {
        return res.status(400).json({
          status: false,
          message: "Username Already Used",
          data: null,
        });
      }
      const encryptedPassword = await bcrypt.hash(password, 10);

      const create = await User.create({
        username,
        email,
        password: encryptedPassword,
      });
      return res.status(201).json({
        status: true,
        message: "User Created!",
        data: {
          email: create.email,
          username: create.username,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(400).json({
          status: false,
          message: "Email or Password doesn't match",
        });
      }

      const correct = await bcrypt.compare(password, user.password);
      if (!correct) {
        return res.status(400).json({
          status: false,
          message: "Email or Password doesn't match",
        });
      }

      const payload = {
        id: user.id,
        email: user.email,
        username: user.username,
      };

      const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

      return res.status(200).json({
        status: true,
        message: "Success Login",
        data: { token },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};
