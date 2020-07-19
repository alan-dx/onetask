const express = require("express");
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

const User = require('../models/user');
const Task = require('../models/task');
const { Promise } = require("../../database");

router.use(authMiddleware);

router.get('/', async (req,res) => {
    try {
        const listTasks = await Task.find().lean();
        let listTasksToGo = [];
        
        await Promise.all(listTasks.map(async task => {

            if (task.assignedTo == req.userId) {
                listTasksToGo.push(task);
            }

        }));

        listTasks.map( task => {
            
        })
        return res.send({listTasksToGo})
    } catch (err) {
        return res.status(400).send({ error: "Error loading tasks "})
    }   
});

router.post('/', async (req,res) => {
    const user = await User.findById(req.userId);
    let id = '';
    const {title, date, hour} = req.body;
    
    await Task.create({title, date, hour, assignedTo: req.userId }).then((res) => {
        id = res._id
    });

    return res.send({title, date, hour, _id: id});
});

router.delete('/:taskId', async (req,res) => {
    await Task.findByIdAndRemove(req.params.taskId)
});

router.put('/:taskId', async (req,res) => {
    await Task.findByIdAndUpdate(
        {_id: req.params.taskId},
        {
            title: req.body.title,
            date: req.body.date,
            hour: req.body.hour
        }
        );
});

module.exports = router;