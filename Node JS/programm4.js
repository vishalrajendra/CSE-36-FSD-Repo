const fs=require("fs");

fs.writeFile("student.txt","hello Students",err=>{


    if(err){
        console.log("Error creating files ",err);
        retrun ;

    }

    console.log("File create successfully");
})