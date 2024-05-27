import * as dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    mongoUrl:
      process.env.MONGO_URL! ||
      process.env.MONGO_CONNECTION_STRING ||
      "mongodb://localhost:27017/driverX",
    host: process.env.APP_HOST || "localhost",

    port: process.env.PORT || 5050,
  },
};

export default config;