const User = require("../models/User");
const Tech = require("../models/Tech");

module.exports = {
  /* Listagem dos endereços de um user */
  async index(req, res) {},
  /* Armazenamento de endereços de usuário */
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const [tech] = await Tech.findOrCreate({
      where: { name }
    });

    console.log(tech);
    await user.addTech(tech);

    console.log(name + " Que treta é essa");

    return res.json(tech);
  }
};
