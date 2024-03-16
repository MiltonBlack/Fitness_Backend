"use strict";
/**************************************************************************************** *
 * ******************************                    ************************************ *
 * ******************************   ALL APP ROUTES   ************************************ *
 * ******************************                    ************************************ *
 * ************************************************************************************** */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth.route"));
const workout_route_1 = __importDefault(require("./workout.route"));
const category_route_1 = __importDefault(require("./category.route"));
const router = (0, express_1.Router)();
/** GET /health-check - Check service health */
router.get('/health-check', (_req, res) => res.send({ check: 'Fitness Application server started ok' }));
// mount all auth routes
router.use("/api/auth", auth_route_1.default);
// mount all course routes
router.use("/api/category", category_route_1.default);
// mount all question routes
router.use("/api/workout", workout_route_1.default);
exports.default = router;
