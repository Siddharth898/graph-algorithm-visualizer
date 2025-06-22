const Grid = require('../models/Grid');

// Save Grid
exports.saveGrid = async (req, res) => {
    try {
        const { name, gridData } = req.body;
        const newGrid = new Grid({ name, gridData });
        await newGrid.save();
        res.json(newGrid);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Saved Grids
exports.getAllGrids = async (req, res) => {
    try {
        const grids = await Grid.find().sort({ createdAt: -1 });
        res.json(grids);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Grid by ID
exports.getGridById = async (req, res) => {
    try {
        const grid = await Grid.findById(req.params.id);
        res.json(grid);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
