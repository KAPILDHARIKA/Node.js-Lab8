const userRoutes = require("./search");
const detailRoutes = require("./details");

const constructorMethod = app => {
    app.use("/", userRoutes);
    app.use("/search", userRoutes);
    app.use("/details", detailRoutes);
    app.get("/", (req, res) => {
        res.render("layouts/main");
    });
    app.use("*", (req, res) => {
        res.sendStatus(404);
    });

};

module.exports = constructorMethod;