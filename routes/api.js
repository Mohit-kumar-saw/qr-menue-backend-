const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const menuController = require('../controllers/menuController');

// Category Routes
router.get('/categories', categoryController.getCategories);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

// Menu Routes
router.get('/menu', menuController.getMenuItems);
router.post('/menu', menuController.createMenuItem);
router.get('/menu/:id', menuController.getMenuItemById);
router.put('/menu/:id', menuController.updateMenuItem);
router.delete('/menu/:id', menuController.deleteMenuItem);

module.exports = router;
