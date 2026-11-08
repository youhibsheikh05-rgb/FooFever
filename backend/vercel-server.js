require("dotenv").config({ path: "./config/config.env" });
const app = require("./app");

// Vercel needs the app to be exported, not listening on a port
module.exports = app;