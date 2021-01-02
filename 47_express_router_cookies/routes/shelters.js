const express = require('express');
const router = express.Router();


router.get('/shelters', (req,res) => {
    res.send('all shelters')
})

router.post('/shelters', (req,res) => {
    res.send('creating shelter')
})

router.get('/shelters:id', (req,res) => {
    res.send('viewing one shelter')
})

router.get('shelters/:id/edit', (req,res) => {
    res.send('editing one shelter')
})

module.exports = router;



