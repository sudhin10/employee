const mongoose = require("mongoose");
//Write missing code 
mongoose
.connect('mongodb+srv://sudhinsuresh:itsme123@cluster.voz7mg9.mongodb.net/employeedb?retryWrites=true&w=majority&appName=Cluster'
   
)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
