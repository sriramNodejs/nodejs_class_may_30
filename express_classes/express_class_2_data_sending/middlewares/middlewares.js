const requestChecker = (req, res, next) => {
    const token = req.query['token'];
    if (!token) {
        return res.status(400).json({
            status: false,
            message: 'token is required'
        })
    }

    if (token !== '12345') {
        return res.status(400).json({
            status: false,
            message: 'invalid token'
        })
    }

    next();
}


const middleware2 = (req, res, next) => {
    console.log('middleware2')

    const name = req.query.name;
    if (!name) {
        return res.status(400).json({
            status: false,
            message: 'name is required'
        })
    }

    next();
}


const middleware3 = (req, res, next) => {
    console.log('middleware3')

    next();
}


module.exports = { requestChecker, middleware2, middleware3 }