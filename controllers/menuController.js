const Menu = require('../models/Menu');

exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await Menu.find().populate('category');
        res.status(200).json(menuItems);
    } catch (error) {
        console.error("GET /menu error:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.getMenuItemById = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id).populate('category');
        if (!menuItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createMenuItem = async (req, res) => {
    try {
        const menuItem = new Menu(req.body);
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        console.error("POST /menu error:", error);
        res.status(400).json({ message: error.message });
    }
};

exports.updateMenuItem = async (req, res) => {
    try {
        const menuItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteMenuItem = async (req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Menu item deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
