const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/divinetree";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Exit the process if there's an error connecting to the database
    process.exit(1);
  }
};

module.exports = connectToMongo;
