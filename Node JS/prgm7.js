const fs = require("fs");
fs.unlink("student.txt",(err)=>{
    if(err){
        console.log("error deleting file",err);
        return;
    }
    console.log("file deleted successfully!");
    
});