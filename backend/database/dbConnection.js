import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Restaurant",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};


