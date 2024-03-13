/**************************************************************************************** *
 * ******************************                    ************************************ *
 * ******************************   ALL APP ROUTES   ************************************ *
 * ******************************                    ************************************ *
 * ************************************************************************************** */

import { Router } from 'express';
import authRoute from './auth.route';
import workoutRoute from './workout.route';
import categoryRoute from './category.route';

const router = Router();

/** GET /health-check - Check service health */
router.get('/health-check', (_req, res) =>
    res.send({ check: 'Fitness Application server started ok' })
);

// mount all auth routes
router.use("/api/auth", authRoute);

// mount all course routes
router.use("/api/category", categoryRoute);

// mount all question routes
router.use("/api/workout", workoutRoute);

export default router;