const { user } = require("../models")

const addUser = (userInfo) => {
    return user.create(userInfo)
}

module.exports = {
    addUser,
}