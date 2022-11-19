module.exports = schema => {
    return (req, res, next) => {
        let errors;
        if (!schema.validate(req.body)) {
            errors = schema.getValidationErrors();
        }
        if(typeof errors != 'object'){
            return next();
        } else {
            return res.status(400).json({
                status: 400,
                message: 'BAD_REQUEST',
                errors
            });
        }
    }
}