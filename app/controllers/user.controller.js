const db     = require("../models");
const User   = db.users;

// Get Single Item
exports.profile = (req, res) => {

    User.findByPk(req.user.id)
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
