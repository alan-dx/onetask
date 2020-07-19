const mongoose = require('../../database');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    assignedTo: {//Fazendo a relação com collection user
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Project = mongoose.model('Task', TaskSchema);

module.exports = Project;