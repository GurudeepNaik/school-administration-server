import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function which uploads locally saved files  to cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    console.log(localFilePath);
    // Upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //  Successfully uploaded the file
    console.log("file uploaded successfully on cloudinary");

    // removes the locally saved temporary file as its been uploaded to cloudinary
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    console.log("got error");
    console.log(error);
    fs.unlinkSync(localFilePath); //removes the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
