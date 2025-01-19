const db     = require("../models");
const User   = db.users;
const Job    = db.jobs;

// Get All Items
exports.getAll = (req, res) => {

    // Get Parameters
    const page  = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const offset = (page - 1) * limit;

    Job.findAndCountAll({ 
            attributes: ['id','title','description','company','location','type'],
            offset: offset,
            limit: limit
        })
        .then((data) => {
            
            const totalRecords = data.count;
            const totalPages   = Math.ceil(totalRecords / limit);

            res.send({
                items: data.rows,
                total: totalRecords,
                page: page,
                totalPages: totalPages,
            });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    `Internal Server Error, ${err.message}`
            });
        });
};

// Get Single Item
exports.getById = (req, res) => {
    const id = req.params.id;

    Job.findByPk(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Item not found`
                });
            } else {
                res.send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Internal Server Error, ${err.message}`
            });
        });
};



// Create Item
exports.create = (req, res) => {
    const { title, description, company, location, type } = req.body;

    const job = {
        title   : title,
        description: description,
        company : company,
        location: location,
        type    : type,
        userId  : req.user.id
    };

    // Save Room in the database
    Job.create(job)
        .then((data) => {
            res.status(201).send({
                item: data,
                message: "Item created Successfully"
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: `Internal Server Error, ${err.message}`
            });
        });
};

// Update Item
exports.update = (req, res) => {

    const id = req.params.id;

    const { title, description, company, location, type} = req.body;

    const job = {
        title   : title,
        description: description,
        company : company,
        location: location,
        type    : type,
    };

    Job.findByPk(id)
        .then((data) => {
            if (!data) {

                res.status(404).send({
                    message: `Item not found`
                });

            } else {

                // Check userId
                if (parseInt(data.userId) !== req.user.id) {
                    return res.status(403).send({ message: 'You are not authorized to update this item!' });
                }

                // Update
                Job.update(job, {
                    where: { 
                        id: id 
                    }
                })
                .then((result) => {
                    if (result == 0) {
                        res.status(404).send({
                            message: `Cannot update item / No Changes Made`
                        });
                    } else {
                        res.send({
                            item: job,
                            message: `Item updated successfully`
                        });
                    }
                })
                .catch((err) => {
                    res.status(500).send({
                        message: `Internal Server Error, ${err.message}`
                    })
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: `Internal Server Error, ${err.message}`
            });
        });
};

// Delete Item
exports.delete = (req, res) => {
    const id = req.params.id;

    Job.findByPk(id)
    .then((data) => {
        if (!data) {

            res.status(404).send({
                message: `Item not found`
            });

        } else {

            // Check userId
            if (parseInt(data.userId) !== req.user.id) {
                return res.status(403).send({ message: 'You are not authorized to update this item!' });
            }

            // Update
            Job.destroy({
                where: { id: id }
            }).then((result) => {
                if (result == 1) {
                    res.send({
                        message: `Item deleted successfully`
                    })
                } else {
                    res.status(400).send({
                        message: `Cannot delete item`
                    })
                }
            }).catch((err) => {
                res.status(500).send({
                    message: `Internal Server Error, ${err.message}`
                })
            });
        }
    })
    .catch((err) => {
        res.status(500).send({
            message: `Internal Server Error, ${err.message}`
        });
    });
};
