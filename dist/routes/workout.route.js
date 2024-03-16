"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = require("../services/verify");
const workout_controller_1 = require("../controllers/workout.controller");
const router = (0, express_1.Router)();
// Get All Courses
router.route("/all").get(verify_1.verify, workout_controller_1.getWorkout);
// Add Course
router.route("/add").post(verify_1.verify, workout_controller_1.createWorkout);
// Edit Course
router.route("/edit/:id").put(verify_1.verify, workout_controller_1.editWorkout);
// Delete Course
router.route("/delete/:id").delete(verify_1.verify, workout_controller_1.deleteWorkout);
exports.default = router;
