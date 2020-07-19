const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

function generateToken(params = {}) {
    
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });

};

router.post("/register", async (req,res) => {
    const {email} = req.body;

    try {
        if (await User.findOne({email: email})) {
            return res.status(400).send({ error: "Email already in use!"})
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({user});
    } catch (err) {
        return res.status(400).send({ error: `Registration failed, error: ${err}`})
    }
});

router.post('/login', async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email: email}).select("+password");

    if (!user) {
        return res.status(400).send({error: "User not found"});
    };

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({error: "Invalid Password"})
    }

    user.password = undefined;

    res.send({
        user,
        token: generateToken({ id: user.id })
    });
})

module.exports = router;