//initial call login route
//instead of GET we will use 
//using asynchronous call 
//Falcor routes allow us to provide arguments with args
export default [
    {
        route: ["login"],
        call: (callPath, args) =>
        {
           //we will check credentials against our database
            const { username, password } = args[0];
            const userStatementQuery = {
                $and: [
                    { "username": username },
                    { "password": password }
                ]
            }
        }
    }
];