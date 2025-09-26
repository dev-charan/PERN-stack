import { createUserService, getAllUserService, getUserByIdService } from "../models/user.model";

export const handleResponse = (res, status,message, data=null)=>{
    res.status(status).json({
        status,
        message,
        data
    })
}

export const createUser = async(req,res,next)=>{
    const { name,email} = req.body;
    try {
        const newUser = await createUserService(name,email)
        handleResponse(res,201,"User created successfully",newUser)
    } catch (error) {
        next(error)
    }
}

export const getAllUser = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    handleResponse(res, 200, "User fetched successfully", users);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const users = await getUserByIdService(req.params.id);
    if(!users) return handleResponse(res,404,"User not found")
    handleResponse(res, 200, "User fetched successfully", users);
  } catch (error) {
    next(error);
  }
};

