import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/companydb")
.then(() => console.log("Db is coneccted"))
.catch(err => console.log(err));