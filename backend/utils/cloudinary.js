import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Log the values of the environment variables to check if they are being loaded correctly
console.log("Cloudinary Configuration:");
console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("API Key:", process.env.API_KEY ? "*****" : "Not defined");
console.log("API Secret:", process.env.API_SECRET ? "*****" : "Not defined");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Log if the Cloudinary configuration is successful
cloudinary.api.ping((error, result) => {
    if (error) {
        console.error("Cloudinary Connection Error:", error);
    } else {
        console.log("Cloudinary Connected Successfully:", result);
    }
});

export default cloudinary;
