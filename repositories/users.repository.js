const { User } = require('../models'); 

class UserRepository {
    findAllUser = async () => {
        const users = await User.findAll(); 
        
        return users; 
    };

    createUser = async (nickname, pwd, userName, userEmail, userPhone, userAddress, userPoint) => {
        const createUserData = await User.create({
            nickname, 
            pwd, 
            userName, 
            userEmail, 
            userPhone, 
            userAddress, 
            userPoint,
        });

        return createUserData; 
    }

    findUserById = async (id) => {
        const user = await User.findByPk(id);  

        return user;
    }
}

module.exports = UserRepository;

