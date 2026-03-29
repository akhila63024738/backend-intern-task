const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json({ success: true, count: tasks.length, data: tasks });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.createTask = async (req, res) => {
    try {
        req.body.user = req.user.id;
        const task = await Task.create(req.body);
        res.status(201).json({ success: true, data: task });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: 'Task not found' });
        if (task.user.toString() !== req.user.id && req.user.role !== 'admin') {
            return res.status(401).json({ msg: 'Not authorized' });
        }
        await task.deleteOne();
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};
