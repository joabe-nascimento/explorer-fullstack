const { Router } = require("express");

const userRoutes = require("./users.Routes");

const routes = Router();

routes.use("/users", userRoutes);

module.exports = routes;
