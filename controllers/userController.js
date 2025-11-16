import User from "../models/user.Schema.js"

export const createUser = async(req, res) => {
   try {
    const userCreate = await User.create(req.body)
    userCreate.save();
    res.status(201).json(userCreate)
   } catch (error) {
    res.status(500).json({error: error.Message})
   }
}

export const getAllUser = async(req, res) => {
    try {
        const getUser = await User.find()
        res.status(200).json(getUser)
    } catch (error) {
        res.status(500).json({error: error.Message})
    }
}

export const patchUser = async(req,res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        if(!updatedUser){
            return res.status(404).json({message:"User Not Found"})
        }
        res.status(200).json({message:"User Partially Updated Successfully", updatedUser})
    } catch (error) {
        res.status(500).json({message: "Internal Server Error",error})
    }
}

export const updateUser = async(req,res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new:true})
        if(!updatedUser){
            return res.status(404).json({message:"User Not Found"})
        }
        res.status(200).json({message:"User Updated Successfully", updatedUser})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", error})
    }
}

export const deleteUser = async(req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id)
        if(!deletedUser){
          return res.status(404).json({message:"User Not Found"})
        }
        res.status(200).json({message:"User Deleted Successfully", deletedUser} )
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error})
    }
}