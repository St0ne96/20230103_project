const { Laundry  } = require('../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;

class LaundryRepository {
    findAllLaundry = async (userId) => {
        const myLundry = await Laundry.findAll({
            where:{
              userId: {
                [Op.like]: "%" + userId + "%"
              }
            } 
        });      

        return myLundry; 
    }

    createLaundry = async (userId, laundryName, img, request, status) => {
        const createLaundryData = await Laundry.create({
            userId,
            laundryName,
            img,
            request,
            status
        });

        return createLaundryData;
    };

    findLaundryById = async(id) => {
        const laundry = await Laundry.findByPk(id); 

        return laundry; 
    }; 

    deleteLaundry = async(id, userId) => {
        const laundry = await Laundry.destroy({where: {id, userId}});

        return laundry; 
    };
}

module.exports = LaundryRepository;