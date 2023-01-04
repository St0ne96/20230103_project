const user = require('../models/user');
const LaundryRepository = require('../repositories/laundries.repository');

class LaundryService {
    laundryRepository = new LaundryRepository();
    
    createLaundry = async (userId, laundryName, img, request, status) => {
        const createLaundryData = await this.laundryRepository.createLaundry(
            userId, 
            laundryName, 
            img, 
            request, 
            status
        );

        return {
            id: createLaundryData.null,
            userId: createLaundryData.userId,
            laundryName: createLaundryData.laundryName,
            img: createLaundryData.img,
            request: createLaundryData.request, 
            status:createLaundryData.status ,
            createdAt: createLaundryData.createdAt,
            updatedAt: createLaundryData.updatedAt,
        };
    };
    
    findAllLaundry = async (userId) => {
        const allLundry = await this.laundryRepository.findAllLaundry(userId);
        console.log({allLundry});

        return allLundry.map((userId) => {
            return {

                laundryName: userId.laundryName,
                status:userId.status ,

            };
        });

    };

    findLaundryById = async (id) => {
        const findLaundry = await this.laundryRepository.findLaundryById(id);

        return {
            id: findLaundry.id,
            userId: findLaundry.userId,
            laundryName: findLaundry.laundryName,
            img: findLaundry.img,
            request: findLaundry.request, 
            status:findLaundry.status,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
        };
    };

    deleteLaundry = async (id, userId) => {
        const findLaundry = await this.laundryRepository.findLaundryById(id, userId);
        if (!findLaundry) throw new Error("세탁물이 존재하지 않습니다"); 

        await this.laundryRepository.deleteLaundry(id, userId);

        return {
            id: findLaundry.id,
            userId: findLaundry.userId,
            laundryName: findLaundry.laundryName,
            img: findLaundry.img,
            request: findLaundry.request, 
            status:findLaundry.status,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
        };
    };
}

module.exports = LaundryService; 