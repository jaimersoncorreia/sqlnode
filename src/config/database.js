module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "docker",
  password: "docker",
  database: "sqlnode",
  port: 15432,
  define: {
    timestamps: true,
    underscored: true
  }
};
/* create_at, update_at */
