const auth = require("./auth");
const userBio = require("./userBio");
const UserHistory = require("./userHistory");

module.exports = {
  auth,
  userBio,
  UserHistory,
  exception: (err, req, res, next) => {
    res.render("server-error", { error: err.message });
  },
  notFound: (req, res, next) => {
    res.render("not-found");
  },
};
