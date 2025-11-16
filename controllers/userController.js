import User from "../models/user.Schema.js"

export const createUser = async(req, res) => {
   try {
    const userCreate = await User.create(req.body)
    userCreate.save();
    res.json(userCreate)
   } catch (error) {
    res.json({error: error.Message})
   }
}

export const getAllUser = async(req, res) => {
    try {
        const getUser = await User.find()
        res.json(getUser)
    } catch (error) {
        res.json({error: error.Message})
    }
}