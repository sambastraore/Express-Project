const express = require('express');
const router = express.Router();
const db = require('./db');
const service = require('./service')

router.get('/', async (req,res) => {
    const employees = await service.getAllEmployees();
    res.send(employees);
})

router.get('/employee/:id', async (req,res) =>{
    const employee = await service.getEmployeeById(req.params.id);
    if (employee.length == 0)
        res.status(404).json('no record with given id')
    else 
        res.send(employee);
})

router.get('/health/ready', async (req, res) => {
    try {
        await db.query('SELECT 1'); 
        res.status(200).send('Ready');
    } catch (error) {
        res.status(503).send('Service Unavailable'); 
    }
});

router.get('/health/live', (req, res) => {
    res.status(200).send('Alive'); 
});


router.delete('/employee/:id', async (req,res) =>{
    const affectedRows = await service.deleteEmployeeById(req.params.id);
    if (affectedRows == 0)
        res.status(404).json('no record with this given id')
    else 
        res.send('deleted successfully!');
})
 

router.post('/users',(req,res) => {
    //traitement
    res.send("This was a test")
})
module.exports = router;


