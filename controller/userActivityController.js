const users = require('../data');
const Secret_Server_Pasword = "asdf1234";

function getAllUserv1(req, res){

    const headers = req.headers;
    const passwordInput = headers.authorization;

    if(passwordInput !== Secret_Server_Pasword){
        return res.status(401).json({
            success: false,
            message: "Unaurthorized you will not be able to access the data"
        });
    }
    const allUsersData = users;
    const payload={
        success : true,
        data : allUsersData,
        size : allUsersData.length
    }
 res.json(payload)
}

function getAllUserv2(req , res){
    const allUserData = users;
    const Payload={
        data : allUserData,
    }
    res.json(Payload);
}

function getAllUserByGender(req , res){
    const allUsersData = users;
    const query = req.query;
    const searchGender = query.Gender;
    const filterUsers =allUsersData.filter((user)=>{
        if(user.gender=== searchGender){
            return true;
        }
        return false;
    });

    const payload={
        status : true,
        data : filterUsers,
        size : filterUsers.length
    }

    res.json(payload);
}

function getUserByName (req, res) {
    const allUsersData = users;
    
    const params = req.params; // { name: 'virat' } 
    const searchedName = params.name;

    const user = allUsersData.find((user) => {
        if(user.name === searchedName) {
            return true;
        }
        return false;
    });
    
    const payload = {
        success: true,
        data: user,
        size: 1
    }
    res.json(payload);
}

module.exports = {getAllUserv1, getAllUserv2, getAllUserByGender, getUserByName}