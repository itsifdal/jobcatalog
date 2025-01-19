module.exports = app => {
    
    let router  = require("express").Router();

    const job   = require("../controllers/job.controller.js");  
    const apiMiddleware = require('../middleware/apiMiddleware');
    
    // Retrieve All Jobs
    router.get("/", job.getAll);

    // Retrieve Job by job id
    router.get("/:id", job.getById);

    // Create a new Job
    router.post("/", apiMiddleware, job.create);

    // Update
    router.put("/:id", apiMiddleware, job.update);

    // Delete
    router.delete("/:id", apiMiddleware, job.delete);

    // Protect all paket endpoints
    app.use('/items', router);
}