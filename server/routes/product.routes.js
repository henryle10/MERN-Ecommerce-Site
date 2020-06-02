const productController = require("../controllers/product.controller");
const userController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/all/products", productController.getAll);
    app.get("/api/product/:id", productController.getOne);
    app.post("/api/products/new", productController.create);
    app.put("/api/products/:id", productController.update);
    app.delete("/api/product/:id", productController.delete);
    app.post("/api/register", userController.register);
    app.post("/api/login", userController.login);
    app.post("/api/logout", userController.logout);

    app.get("/api/users", authenticate, userController.getAll);
    app.get("/api/users/loggedin", authenticate, userController.getLoggedInUser);
};
