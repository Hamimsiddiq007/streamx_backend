import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import uploadOnCloudinary from '../utils/cloudinary.js';

const registerUser = asyncHandler(async (req, res) => {
    // Get user data from frontend
    // Validation - not emoty
    // Check if user already exists : email, username
    // Check for image, check for avatar
    // upload them to cloudinary
    // Create user object - entry in database
    // remove password from response
    // send response to frontend

    const {username, email, password, fullname} = req.body;
    console.log('email :', email);

    if(
        [username, email, password, fullname].some(field => field.trim() === '')
    ){
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{email}, {username}]
    })

    if(existedUser){
        throw new ApiError(400, "User already exists with this email or username");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(400, "avatar upload failed");
    }

});


export {registerUser};