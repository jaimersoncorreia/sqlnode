const User = require("../models/User");
const Tech = require("../models/Tech");

module.exports = {
  /* Listagem dos endereços de um user */
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: {
        association: "techs",
        attributes: ["name"],
        through: { attributes: [] }
      }
    });
    return res.json(user.techs);
  },
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

    return res.json(tech);
  },
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const tech = await Tech.findOne({
      where: { name }
    });

    await user.removeTech(tech);

    return res.json();
  }
};
