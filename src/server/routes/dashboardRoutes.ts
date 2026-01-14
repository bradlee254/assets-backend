import express from 'express';
import DashboardController from '../controllers/Dashboard/dashboardControllers';

const router = express.Router();
router.get('/' ,DashboardController.getDashboardData)