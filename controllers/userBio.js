const { UserBio } = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      // const user = req.user;
      const { username, bio, user_id } = req.body;

      const exist = await UserBio.findOne({
        where: { username: username },
      });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "Bio Already Created",
          data: null,
        });
      }
      const create = await UserBio.create({
        username,
        bio,
        user_id,
      });
      return res.status(201).json({
        status: true,
        message: "Bio Created!",
        data: create,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  update: async (req, res) => {
    try {
      // const user = req.user;
      const { username, bio } = req.body;
      const exist = await UserBio.findOne({
        where: { username: username },
      });

      if (!exist) {
        return res.status(400).json({
          status: false,
          message: "Bio Haven't Created",
          data: null,
        });
      }

      await UserBio.update(
        {
          bio: bio,
        },
        {
          where: {
            username: username,
          },
        }
      );

      const updated = await UserBio.findOne({
        where: { username: username },
      });
      return res.status(200).json({
        status: true,
        message: "Bio Updated",
        data: {
          username: updated.username,
          bio: updated.bio,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  getAll: async (req, res) => {
    try {
      const findAll = await UserBio.findAll();
      return res.status(200).json({
        status: true,
        message: "Success Get All Data",
        data: findAll,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  getDetail: async (req, res) => {
    try {
      const { id } = req.params;

      const found = await UserBio.findOne({ where: { user_id: id } });
      if (!found) {
        return res.status(400).json({
          status: false,
          message: "User not Found",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Success Get Data",
        data: found,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  delete: async (req, res) => {
    try {
      // const user = req.user;
      const { id } = req.params;

      const deleteBio = await UserBio.destroy({
        where: { user_id: id },
      });

      return res.status(200).json({
        status: true,
        message: "Data Deleted!",
        data: deleteBio,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
};
