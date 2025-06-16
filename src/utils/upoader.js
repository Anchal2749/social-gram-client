import { v2 as cloudinary } from "cloudinary";
const uploadOnCloudinary= async(localFilePath)=>{
try{
    if(!localFilePath)
        return null;
    //upload file on cloudinary
    const response=await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    //file has been uploaded successfully
    console.log("file is uploaded on cloudinary",response.url);
    return response;

}
catch (error){

//remove the locally saved temporary file as the upload operation got failed
return null;
}
}
cloudinary.config({ 
    cloud_name: "doagrwjza", 
    api_key:"836546579181417", 
    api_secret:"t4TpTkLAUMpM99uw4s2p0RIp140" // Click 'View API Keys' above to copy your API secret
});
export {uploadOnCloudinary}