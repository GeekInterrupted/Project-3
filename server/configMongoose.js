import mongoose from "mongoose";

const conf = {
    hostname: process.env.MONGO_HOSTNAME || "localhost",
    port: process.env.MONGO_PORT || 27017,
    env: process.env.MONGO_ENV || "localdb",
};

mongoose.connect(`mongodb://${conf.hostname}:
${conf.port}/${conf.env}`);

const countrySchema = {
    countryName:String,
    countryLang:String,
};

const Country = mongoose.model("Country", countrySchema, "countries");

const userSchema = {
    username:String,
    password:String,
    firstname:String,
    lastname:String,
    email:String,
    role:String,
    verified:Boolean
};

const User = mongoose.model("User", userSchema, "users");

export default {
    Country,
    User
};