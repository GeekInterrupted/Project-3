import configMongoose from "./configMongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import jwtSecret from "./configSecret";
const User = configMongoose.User;

//initial call login route
//instead of GET we will use 
//using asynchronous call 
//Falcor routes allow us to provide arguments with args
export default [
    {
        route: ["login"],
        call: (callPath, args) =>
        {
          let { username, password } = args[0];
          let saltedPassword = password+"embajador" //embajador is our salt string
          let saltedPassHash = crypto.createHash("sha256").update(saltedPassword).digest("hex");
          let userStatementQuery = {
              $and: [
                  { "username" : username },
                  { "password": saltedPassHash }             
              ]
          }
          return User.find(userStatementQuery, function(err, user) {
              if (err) throw err;
          }).then((result) => {
              if(result.length) {
                  let role = result[0].role;
                  let userDetailsToHash = username+role;
                  let token = jwt.sign(userDetailsToHash,jwtSecret.secret);
                  return [
                      {
                      path: ["login", "token"],
                    value: token 
              },
              {
                  path: ["login", "username"],
                  value: username
              },
              {
                  path: ["login", "role"],
                  value: role
              },
              {
                  path: ["login", "error"],
                  value: false
              }
            ];
        } else {
            //invalid sign in
            return [
                {
                    path: ["login", "token"],
                    value: "INVALID"
                },
                {
                    path: ["login", "error"],
                    value: "NO USER FOUND, incorrect login"
                }
            ];
        }
        return result;
            });
         }
    },
    {
        route: ["register"],
        call: (callPath, args) =>
        {
            let newUserObject = args[0];
            newUserObject.password = newUserObject.password+"embajador";
            newUserObject.password =
            crypto.createHash("sha256").update(newUserObject.password).digest("hex");
            let newUser = new User(newUserObject);
            return newUser.save((err, data) => { if (err) return err; })
            .then ((newResponse) => {
                //after we get the new object data, we get the count
            let newUserDetail = newResponse.toObject();
            if(newUserDetail._id) {
                let newUserId = newUserDetail._id.toString();
                return [
                    {
                        path: ["register", "newUserId"],
                        value: newUserId
                    },
                    {
                        path: ["register", "error"],
                        value: false
                    }
                ];
            }else {
                //if the registration fails return a message to the user
                return [
                    {
                        path: ["register", "newUserId"],
                        value: "INVALID"
                    },
                    {
                        path: ["register", "error"],
                        value: "Failed registration, no id was created"
                    }
                ];
            }
            return;
            }).catch((reason) => console.error(reason));
        }
    }
];