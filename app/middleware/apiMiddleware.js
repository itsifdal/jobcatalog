const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    
    const token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token

    if (!token) {
        return res.status(401).send({ message: 'Access token is missing!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Validate token
        req.user = decoded; // Attach user info to the request
        next(); 
    } catch (err) {
        res.status(403).send({ message: 'Unauthorized!' });
    }
};

module.exports = authenticateToken;
