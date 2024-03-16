"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWorkout = exports.editWorkout = exports.getWorkout = exports.createWorkout = void 0;
const workout_model_1 = require("../models/workout.model");
const createWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workout = new workout_model_1.Workout(req.body);
        yield workout.save();
        return res.status(201).json(workout);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createWorkout = createWorkout;
const getWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workout = yield workout_model_1.Workout.find();
        return res.status(200).json(workout);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getWorkout = getWorkout;
const editWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateWorkout = yield workout_model_1.Workout.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        return res.status(200).json(updateWorkout);
    }
    catch (error) {
        console.log(error);
    }
});
exports.editWorkout = editWorkout;
const deleteWorkout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteWorkout = yield workout_model_1.Workout.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json(deleteWorkout);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteWorkout = deleteWorkout;
