const fs = require("fs");


fs.appendFile("student.txt", "\nMarks: 85", (err) => {
    
    // Check for error
    if (err) {
        console.log("Error updating file:", err);
        return;
    }
    
    console.log("File updated successfully!");
});