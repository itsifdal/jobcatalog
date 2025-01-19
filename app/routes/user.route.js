module.exports = app => {
    
    let router  = require("express").Router();

    const user  = require("../controllers/user.controller.js");    
    const apiMiddleware = require('../middleware/apiMiddleware');

    // Profile
    router.get("/profile", user.profile);

    // Protect all paket endpoints
    app.use('/user', apiMiddleware, router);
}