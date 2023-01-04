const UserRepository = require('../repositories/users.repository');

class UserService {
    userRepository = new UserRepository();

    findAllUser = async (user) => {
        const allUsers = await this.userRepository.findAllUser();
        console.log({allUsers});
        
        return allUsers.map((user) => {
            return {
                id: user.id,
                nickname: user.nickname, 
                pwd: user.pwd,   
                userName: user.userName,
                userEmail: user.userEmail,  
                userPhone: user.userPhone,   
                userAddress: user.userAddress,  
                userPoint: user.userPoint, 
                createdAt: user.createAt,
                updatedAt: user.updatedAt,
             };  
        }); 
    };

    createUser = async (nickname, pwd, userName, userEmail, userPhone, userAddress, userPoint) => {
        const createUserData = await this.userRepository.createUser(
            nickname, 
            pwd, 
            userName, 
            userEmail, 
            userPhone, 
            userAddress, 
            userPoint
        );

        return {
                id: createUserData.null,
                nickname: createUserData.nickname, 
                pwd: createUserData.pwd,   
                userName: createUserData.userName,
                userEmail: createUserData.userEmail,  
                userPhone: createUserData.userPhone,   
                userAddress: createUserData.userAddress,  
                userPoint: createUserData.userPoint, 
                createdAt: createUserData.createAt,
                updatedAt: createUserData.updatedAt,
            }; 
    };

    findUserById = async (id) => {
        const findUser = await this.userRepository.findUserById(id);

        return {
            userPoint: findUser.userPoint, 
        };
    };

}
module.exports = UserService;


    