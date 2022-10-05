
const {user} = require('../models/index');

const getuserbyemail = async (data) =>{
    const response = await user.findOne({
        where:{
            email:data
        }
    });
    return response;
}

module.exports = {getuserbyemail}