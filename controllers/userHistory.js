const { UserHistory } = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      // const user = req.user;
      const { username, user_id, score } = req.body;
      const addScore = await UserHistory.create({
        username,
        score,
        user_id,
      });
      return res.status(201).json({
        status: true,
        message: "Score Added!",
        data: addScore,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  getAll: async (_req, res) => {
    try {
      const findAll = await UserHistory.findAll();
      return res.status(200).json({
        status: true,
        message: "success get all user Score",
        data: findAll,
      });
    } catch (error) {
      console.log(error.messages);
    }
  },
  getDetail: async (req, res) => {
    try {
      const { id } = req.params;

      const exist = await UserHistory.findOne({ where: { user_id: id } });
      if (!exist) {
        return res.status(400).json({
          status: false,
          message: "user doesn't exist",
          data: null,
        });
      }
      const findUser = await UserHistory.findOne({
        where: { user_id: id },
      });
      return res.status(200).json({
        status: true,
        message: "Succes get user history",
        data: findUser,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};
