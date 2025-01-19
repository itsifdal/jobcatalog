module.exports = app => {
    
    let router  = require("express").Router();

    const auth  = require("../controllers/auth.controller.js");    

    // Register
    router.post("/register", auth.register);

    // Login
    router.post("/login", auth.login);

    // Protect all paket endpoints
    app.use('/auth', router);
}