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
exports.editCategory = exports.deleteCategory = exports.getCategory = exports.createCategory = void 0;
const category_model_1 = require("../models/category.model");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cat = new category_model_1.Category(req.body);
        yield cat.save();
        return res.status(201).json(cat);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.createCategory = createCategory;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cat = yield category_model_1.Category.find();
        return res.status(201).json(cat);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.getCategory = getCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cat = yield category_model_1.Category.findByIdAndDelete({ _id: req.params.id });
        return res.status(201).json(cat);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.deleteCategory = deleteCategory;
const editCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateCat = yield category_model_1.Category.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });
        return res.status(200).json(updateCat);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.editCategory = editCategory;
