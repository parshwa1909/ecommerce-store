const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  "mongodb+srv://parshwa2001:P$g8460887627@cluster0.nk7vwwl.mongodb.net/<database-name>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error("Failed to connect to the database:", error));
