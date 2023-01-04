const LaundryService = require('../services/laundries.service');

class LaundryController {
    laundryService = new LaundryService();

    createLaundry = async (req, res, next) => {
        // const { userId } = res.locals.user;
        const { userId, laundryName, img, request, status } = req.body; 
        const createLaundryData = await this.laundryService.createLaundry(
            userId,
            laundryName, 
            img, 
            request, 
            status
        );

        res.status(201).json({ data:createLaundryData });
    };

    getLaundry = async (req, res, next) => {
        const {userId} = req.params; 
        
        const myLundry = await this.laundryService.findAllLaundry(userId);

        res.status(200).json({data: myLundry}); 
        
    };


    getLaundryById = async (req, res, next) => {
        const { id } = req.params; 
        const laundry = await this.laundryService.findLaundryById(id);

        res.status(200).json({data: laundry});
    };
    
    deleteLaundry = async (req, res, next) => {
        const { id } = req.params;
        const {userId } = req.params; 
        const deleteLaundry = await this.laundryService.deleteLaundry(id, userId);

        res.status(200).json({data:deleteLaundry});
    };
}

module.exports = LaundryController;