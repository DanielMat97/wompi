const handlerTimeoutMiddleware = (req, _, next) => {
    if (!req.timedout) next();
}

module.exports = handlerTimeoutMiddleware;