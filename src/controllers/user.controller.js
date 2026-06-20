import asyncHandler from '../utils/asyncHandler.js';

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
});


export {registerUser};