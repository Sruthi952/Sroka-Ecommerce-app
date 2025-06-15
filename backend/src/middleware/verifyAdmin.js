const verifyAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: "You are not authorized to perform this action"
        });
    }
    next();
};

module.exports = verifyAdmin;
