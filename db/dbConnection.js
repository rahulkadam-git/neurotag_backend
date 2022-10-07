const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://neurotag:0jNiZCWNR822QGU6@cluster0.oq9k5y3.mongodb.net/sampledata?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDb Connect on ${con.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
