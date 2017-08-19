import mongoose from "mongoose";

const conf = {
    hostname: process.env.MONGO_HOSTNAME || "localhost",
    port: process.env.MONGO_PORT || 27017,
    env: process.env.MONGO_ENV || "localdb",
};

mongoose.connect(`mongodb://${conf.hostname}:
${conf.port}/${conf.env}`);

const entrySchema = {
    entryTitle:String,
    entryContent:String,
};

const Entry = mongoose.model("Entry", entrySchema, "entries");

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
    Entry,
    User
};