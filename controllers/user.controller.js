const userService = require("../services/users.service")

const registerUser = async (req, res, next) => {
    const userInfo = req.body
    userInfo.role = 'user'

    const user = await userService.addUser(userInfo)
    res.status(200).json({
        user,
    })
    try {
    } catch (error) {
        res.status(400).json({
            error: error.errors[0]?.message,
        })
    }
}

module.exports = {
    registerUser
}

