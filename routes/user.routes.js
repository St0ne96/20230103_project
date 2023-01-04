const express = require("express");
const router = express.Router();

const Usercontroller = require("../controllers/user.controller");
const usercontroller = new Usercontroller(); 

// 임시 테스트 회원가입 구현 
router.get("/users", usercontroller.getUsers);
router.post("/users", usercontroller.createUser);


// 손님 메인 페이지 
router.get("/user/laundry/:id", usercontroller.getUserById);



module.exports = router;
