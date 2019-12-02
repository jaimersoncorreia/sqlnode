const User = require("../models/User");

module.exports = {
  //método responsável por armazenar usuários
  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.json(user);
  }
};
