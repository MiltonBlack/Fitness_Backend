"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
// Signup Lecturer
router.route("/signup").post(auth_controller_1.Signup);
//Login Lecturer
router.route("/signin").post(auth_controller_1.Login);
exports.default = router;
