const UserService = require('../services/users.service');

class Usercontroller {
  UserService = new UserService();

  getUsers = async (req, res, next) => {
    const users = await this.UserService.findAllUser(); 

    res.status(200).json({ data: users });
  };

  createUser = async (req, res, next) => {
    const {nickname, pwd, userName, userEmail, userPhone, userAddress, userPoint} = req.body;
    const createUserData = await this.UserService.createUser(
      nickname, 
      pwd, 
      userName, 
      userEmail, 
      userPhone, 
      userAddress, 
      userPoint
    );

    res.status(201).json({ data: createUserData });
  };


  getUserById = async (req, res, next) => {
    const { id } = req.params; 
    const user = await this.UserService.findUserById(id);

    res.status(200).json({data: user}); 
  };

}

module.exports = Usercontroller;