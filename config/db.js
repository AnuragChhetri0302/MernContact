const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected : ${conn.connection.host}`.green.bold);
  } catch (error) {
    console.log(`MongoDb not connected : ${error.message}`.red.bold);
    process.exit();
  }
};
module.exports = connectDB;
