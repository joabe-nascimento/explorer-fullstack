const { Router } = require("express");

const usersRoutes = require("./users.Routes");
const notesRoutes = require("./notes.Routes");

const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);

module.exports = routes;
