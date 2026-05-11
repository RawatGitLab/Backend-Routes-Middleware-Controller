const Secret_Server_Pasword = "asdf1234";
function passwordAuthMiddleware(req, res, next){
    const headers = req.headers;
    const passwordInput = headers.authorization;

    if(passwordInput !== Secret_Server_Pasword){
        return res.status(401).json({
            success: false,
            message: "Unaurthorized you will not be able to access the data"
        });
    }
    else{
        next();
    }

}

module.exports = { passwordAuthMiddleware }