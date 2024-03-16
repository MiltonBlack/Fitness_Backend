"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = require("../services/verify");
const category_controller_1 = require("../controllers/category.controller");
const router = (0, express_1.Router)();
// Get All Courses
router.route("/all").get(verify_1.verify, category_controller_1.getCategory);
// Add Course
router.route("/add").post(verify_1.verify, category_controller_1.createCategory);
// Edit Course
router.route("/edit/:id").put(verify_1.verify, category_controller_1.editCategory);
// Delete Course
router.route("/delete/:id").delete(verify_1.verify, category_controller_1.deleteCategory);
exports.default = router;
