const { Op } = require("sequelize"); //importando os operadores
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    /* 
      Encontrar todos usuários que tem email que termina com @hotmail.com
      Desses usuários eu quero buscar todos que moram na rua "Rua Margarida"
      Desses usuários eu quero buscar as tecnologias que começam com Rect
    */
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@hotmail.com"
        }
      },
      include: [
        {
          association: "addresses",
          where: { street: "Rua Margarida" }
        }, //endereços
        {
          association: "techs",
          required: false,
          where: {
            name: {
              [Op.iLike]: "React%"
            }
          }
        } //tecnologias
      ]
    });

    return res.json(users);
  }
};
