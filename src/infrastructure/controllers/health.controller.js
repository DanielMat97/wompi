const healthController = () => {
    return {
        status: 200,
        uptime: new Date().getTime()
    }

}

module.exports = healthController;