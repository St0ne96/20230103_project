const express = require("express");
const router = express.Router();

const LaundryController = require("../controllers/laundry.controller");
const laundryController = new LaundryController(); 


// 내 세탁물 조회 
router.get("/user/laundry/:userId/list", laundryController.getLaundry);

// 세탁물 등록하기  
router.post("/user/laundry/newRequest/", laundryController.createLaundry);

// 세탁물 상세조회 
router.get("/user/laundry/list/:id", laundryController.getLaundryById);

// 세탁물 취소하기 
router.delete("/user/laundry/:userId/list/:id/delete", laundryController.deleteLaundry);


module.exports = router;
