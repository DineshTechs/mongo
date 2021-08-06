const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        const decoded = jwt.verify(token, 'jwt phares')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error("No User!")
        }
        req.user = user
        next()
        //console.log(token)
    } catch (e) {
        res.status(401).send({ Error: 'Not authenticated!' })
    }
    console.log('middleware')
    next()
}

module.exports = auth